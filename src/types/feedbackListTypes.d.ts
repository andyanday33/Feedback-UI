declare interface IFeedbackListProps { 
    feedback : IFeedback[],
    handleDelete: (id: number | string) => void,  
};