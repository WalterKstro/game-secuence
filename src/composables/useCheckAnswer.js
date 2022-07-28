const useCheckAnswer = () => {
    const checkingTheAnswers = (answerThruty, answerChooised) => {
        return (answerThruty == answerChooised) ? true : false;
    }

    const processScore = (rightAnwers, totalAnswers) => {
        return (rightAnwers * 100) / totalAnswers
    }
    
    return {
        checkingTheAnswers,
        processScore
    }

}

export default useCheckAnswer