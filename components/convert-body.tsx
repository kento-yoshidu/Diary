import parse from "html-react-parser"
import Image from "next/image"

export default function ConvertBody({ contentHTML }: { contentHTML: string }) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {

      /* @ts-ignore */
      if (node.name === "img") {
        /* @ts-ignore */
        const { src, alt, width, height } = node.attribs

        return (
          <Image
            // layout="responsive"
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 768px) 768px, 100vw"
            style={{
              width: "100%",
              height: "auto"
            }}
          />
        )
      }
    }
  })

  return <>{contentReact}</>
}
