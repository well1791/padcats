import { Link } from 'react-router-dom';

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
        <Link to={'one'}> go to podcast one</Link>
      </p>
    </>
  )
}

export default Podcasts;
