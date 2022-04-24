declare interface IFeedbackItemProps { 
    key: number | string,
    item: IFeedback,
    handleDelete: (id: number | string) => void,
};

declare interface IFeedback {
    id: number | string,
    rating: number,
    text: string,
}

  