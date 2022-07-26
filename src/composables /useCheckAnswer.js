const useCheckAnswer = () => {
    const checkingTheAnswers = (answerThruty, answerChooised) => {
        return (answerThruty == answerChooised) ? true : false;
    }
    
    return {
        checkingTheAnswers
    }

}

export default useCheckAnswer