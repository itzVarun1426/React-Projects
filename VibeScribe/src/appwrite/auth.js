import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password
            );
            await this.account.createEmailPasswordSession(email, password);

            if (name) {
                await this.account.updateName(name);
            }

            return userAccount;
        } catch (err) {
            console.error("Error creating account:", err.message);
            throw err;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (err) {
            console.error("Error while logging in:", err.message);
            throw err;
        }
    }

    // async getCurrentUser() {
    //     try {
    //         return await this.account.get();
    //     } catch (err) {
    //         console.error("Error fetching current user:", err.message);
    //         return null;
    //     }
    // }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("User fetched from Appwrite:", user);
            return user;
        } catch (err) {
            // Suppress logging for the expected guest 'missing scope (account)' error
            if (
                err?.message?.includes('missing scope (account)') ||
                err?.message?.includes('Unauthorized')
            ) {
                // Do nothing, this is expected for guests
            } else {
                console.error("Error in getCurrentUser:", err.message);
            }
            return null;
        }
    }


    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (err) {
            console.error("Error while logging out:", err.message);
        }
    }
}

const authService = new AuthService();
export default authService;
