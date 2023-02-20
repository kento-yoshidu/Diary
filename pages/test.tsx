export default function Test () {
  return (
    <h1>test</h1>
  )
}

export async function getStaticProps() {
  return {
    props: {
      message: "test1"
    }
  }
}
