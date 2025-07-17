

const DynamicMetaData = () => {
  return (
    <>
        <h2>Dynamic MetaData</h2>
    </>
  )
}

export default DynamicMetaData;

export function generateMetaData(){
    return{
        title: 'My First Project',
        description: 'This is my first next js '
    }
}