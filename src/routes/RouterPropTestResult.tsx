interface propTypes{
    location : {
        state : {
            menu :{
                name :string,
                price : string
            }
        }
    }
}

export default function RouterPropTestResult(props: any) {
    console.log(props)
    return (
      <>
        <h1>RouterPropTestResult</h1>
      </>
    );
  }
  