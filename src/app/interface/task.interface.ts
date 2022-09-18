interface ITask {
  id?: string;
  title: string;
  status: string;
  dueDate: Date;
  description: string;
}
interface StatusOption {
  status: string;
}

interface IStatusPercentage {
  count: number;
  status: string;
}
enum StatusEnums {
  TODO = "todo",
  PENDING = "pending",
  IN_PROGRESS = "in progress",
  DONE = "done"
}

export { ITask, StatusOption, IStatusPercentage,StatusEnums };
