type History = {
    id: number
    title: string
    action: ActionType
    description: string
}

export type { History }

export enum ActionType {
    CREATE = "create",
    UPDATE = "update",
    DELETE = "delete",
    RESTORE = "restore",
}
