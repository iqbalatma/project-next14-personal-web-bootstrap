abstract class BaseAPIService{
    /**
     * @return string
     */
    public static getBaseUrl(): string {
        return process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/api/v1";
    }
}

export default BaseAPIService