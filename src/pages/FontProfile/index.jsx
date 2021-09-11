import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sanityClient from '../../client.js'
// import TypeTester from '../../components/TypeTester'
import {StyledBlock} from './styles'

const FontProfile = () => {
  const [data, setData] = useState(null)
  const {slug} = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
            _id,
            title,
            "slug": slug.current,
            "weights": weights[]->title,
            "slants": slants[]->title,
            preview1,
            preview1Size,
            "preview1weight": preview1Weight[]->title,
            "preview1slant": preview1Slant[]->title,
            preview2,
            preview2Size,
            "preview2weight": preview2Weight[]->title,
            "preview2slant": preview2Slant[]->title,
            preview3,
            preview3Size,
            "preview3weight": preview3Weight[]->title,
            "preview3slant": preview3Slant[]->title,
        }`,
        {slug}
      )
      .then((data) => setData(data[0]))
      .catch(console.error)
  }, [slug])

  if (!data) return <div>Loading...</div>

  console.log(data)

  return (
    <>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>
            {data.title} {data.preview1weight}
          </p>
          <StyledBlock
            blocks={data.preview1}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
            $fontSize={data.preview1Size}
          />
          {/* <TypeTester font={data} /> */}
        </div>
      )}
    </>
  )
}

export default FontProfile
