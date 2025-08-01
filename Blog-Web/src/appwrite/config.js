import conf from '../conf/conf.js';
import { Client, ID, Databases, Query, Storage } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProductId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId },
            )
        }
        catch (error) {
            console.error("Error ceating post :", error);
            throw error;
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status }

            )
        }
        catch (error) {
            console.error("Error updating post :", error);
            throw error;
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }
        catch (error) {
            console.error("Error deleting post :", error);
            throw error;
        }

    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);

        }
        catch (error) {
            console.error("Error getting post :", error);
            throw error;
        }
    }
    async listPost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries);

        }
        catch (error) {
            console.error("Error getting all posts :", error);
            throw error;
            return false;
        }
    }
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);

        }
        catch (error) {
            console.error("Error uploading files :", error);
            throw error;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        }
        catch (error) {
            console.error("Error deleting files :", error);
            throw error;
        }
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    }

}

export default new Service();