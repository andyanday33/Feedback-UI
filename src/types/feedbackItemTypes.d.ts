declare interface IFeedbackItemProps { 
    key: number,
    item: IFeedback,
    handleDelete: (id: number) => void,
};

declare interface IFeedback {
    id: number,
    rating: number,
    text: string,
}

  