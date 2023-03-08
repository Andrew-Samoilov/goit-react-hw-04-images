import { LineWave } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <div>
        <LineWave
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
            /> 
        Loading
        </div>
    );
}
