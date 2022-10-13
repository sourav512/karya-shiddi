export interface Task {
    id: string,
    title: string;
    description: string;
    priority: number | string;
    date: string;
    isCompleted: boolean;
}