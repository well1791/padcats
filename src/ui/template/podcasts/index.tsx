type Podcast = {
  id: string
}

export type Data = {
  podcasts: Array<Podcast>
}

export type Props = {
  data: Data
}

function Podcasts({ ...p }: Props) {
  return (
    <>
      <p>
        podcasts list
      </p>
    </>
  )
}

export default Podcasts;
