import _, { endsWith } from 'lodash'

const useSecuence =  () => {

    const list = _.range(1,101)

    const randomIndex = () => {
        return _.random(0,6)
    }

    const generateStartAndEndIndex = () => {
        const startIndex = _.random(0,92);
        const endIndex = startIndex + 7;
        
        return { startIndex, endIndex }
    }

    const listSecuenceNumbers = () => {
        const { startIndex,endIndex } = generateStartAndEndIndex()
        return list.slice( startIndex, endIndex )
    }

    const hideRandomNumber = () => {
        const indexRandom = randomIndex();
        const list = listSecuenceNumbers();
        const listWithNumberHidden = list.map( (number, index) => {
            return ( index == indexRandom ) ? null : number
        })

        return {
            list: listWithNumberHidden,
            truthy: list[ indexRandom ]
        }
    }

    const getListWithTheProbablityAnswer = truthyAnswer => {
        _.remove( list, n =>  n == truthyAnswer )

        const startIndex = _.random(0,91);
        const endIndex = startIndex + 7;

        return _.shuffle( [ list[startIndex],list[endIndex],truthyAnswer ] )
    }

    return {
        hideRandomNumber,
        getListWithTheProbablityAnswer
    }
}

export default useSecuence