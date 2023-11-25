export type Permission = {
    id: string,
    name: string,
    guard_name: string,
    description: string | null,
    feature: string | null,
    created_at?: string,
    updated_at?: string
}