export type Data = {
  id: string
}

export type Props = {
  data: Data
}

function Podcast({ data: d, ...p }: Props) {
  return (
    <>
      <p>welcome to podcast {d.id}!</p>
    </>
  )
}

export default Podcast;
