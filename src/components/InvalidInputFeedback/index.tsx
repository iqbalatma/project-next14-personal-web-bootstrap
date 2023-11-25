const InvalidInputFeedback = ({invalidText}: { invalidText: string }) => {
    return <div className={"invalid-feedback"}>
        <i className={"bx bx-radio-circle"}></i>
        {invalidText}
    </div>;
}

export default InvalidInputFeedback