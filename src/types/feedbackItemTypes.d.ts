interface IFeedbackItemProps { 
    key: number,
    item: IFeedback,
    handleDelete: (id: number) => void,
};

interface IFeedback {
    id: number,
    rating: number,
    text: string,
}

  