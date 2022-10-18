import GGrip_Scroll from "../components/GGrip_Scroll";
import Head from "next/head";
import _ from "lodash";

export default function GGrip_Scroll_Test () {
  //Preload all Images in ScrollAnimation from frame 0 to 120
  return ( <>
      <Head>
        <AllImagesPreload/>
      </Head>
      <div>
        <GGrip_Scroll/>
      </div>
    </>
  )
}

const AllImagesPreload = () => {
  const imageRange = _.range(0, 120);

  const imagePreload = imageRange.map((image) => {
    const imageString = image.toString().padStart(3, '0');
    return <link rel="preload" href={`/img/scrollAnimation/ezgif-frame-${imageString}.jpg`} as="image"/>
  })

  return (
    <>
      {imagePreload}
    </>
  )

}

