import conf from '../conf/conf';
import { Client, Storage, ID, Databases, Query } from 'appwrite';

export class ConfigService {
    client = new Client();
    bucket;
    database;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.bucket = new Storage(this.client);
        this.database = new Databases(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            const post = await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId }
            );
            return post;
        } catch (err) {
            console.error('Error creating post:', err.message);
            throw new Error('Failed to create post. Please try again.');
        }
    }

    async updatePost({ title, slug, content, featuredImage, status }) {
        try {
            const post = await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status }
            );
            return post;
        } catch (err) {
            console.error('Error updating post:', err.message);
            throw new Error('Failed to update post. Please try again.');
        }
    }

    async deletePost(slug) {
        try {
            const response = await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return response;
        } catch (err) {
            console.error('Error deleting post:', err.message);
            throw new Error('Failed to delete post. Please try again.');
        }
    }

    async getAllPosts() {
        try {
            const response = await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.orderDesc('$createdAt'), Query.limit(30)]
            );
            return response;
        } catch (err) {
            console.error('Error fetching posts:', err.message);
            throw new Error('Failed to fetch posts. Please try again.');
        }
    }

    async getPostBySlug(slug) {
        try {
            const response = await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return response;
        } catch (err) {
            console.error('Error fetching post by slug:', err.message);
            throw new Error('Failed to fetch post. Please try again.');
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error('uploadFile error:', error.message);
            throw new Error('Failed to upload file. Please try again.');
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error('deleteFile error:', error.message);
            throw new Error('Failed to delete file. Please try again.');
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
        } catch (err) {
            console.error('Error fetching file preview:', err.message);
            throw new Error('Failed to fetch file preview. Please try again.');
        }
    }
}

const configService = new ConfigService();
export default configService;
