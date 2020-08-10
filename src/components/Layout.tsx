import React, { ReactNode } from "react"
import Head from "next/head"

interface Props {
  title?: string
  description?: string
  image?: string
  url?: string
  children?: ReactNode
}

const Layout = ({ children, title, description, image, url }: Props) => {
  const defaultDescription = "Hypersensitive Individual Registar"
  const defaultImage = ""
  const defaultTitle = "NoSpray"
  const defaultUrl = "https://info.nospray.us"

  return (
    <div className="page">
      <Head>
        <meta
          property="og:title"
          content={title ?? defaultTitle}
          key="og-title"
        />
        <meta
          property="og:description"
          content={description ?? defaultDescription}
          key="og-description"
        />
        <meta
          property="og:image"
          content={image ?? defaultImage}
          key="og-image"
        />
        <meta property="og:url" content={url ?? defaultUrl} key="og-url" />
        <meta
          name="title"
          content={title ?? "Progressive App Store"}
          key="title"
        />
        <meta
          name="description"
          content={description ?? defaultDescription}
          key="description"
        />
        <meta name="image" content={image ?? defaultImage} key="image" />
        <meta name="url" content={url ?? defaultUrl} key="url" />
        <meta
          property="twitter:title"
          content={title ?? defaultTitle}
          key="twitter-title"
        />
        <meta
          property="twitter:description"
          content={description ?? defaultDescription}
          key="twitter-description"
        />
        <meta
          property="twitter:image:src"
          content={image ?? defaultImage}
          key="twitter-image"
        />
        <meta
          property="twitter:site"
          content="Progressive App Store"
          key="twitter-site"
        />
        <meta
          property="twitter:image:height"
          content="600"
          key="twitter-height"
        />
        <meta
          property="twitter:image:width"
          content="600"
          key="twitter-width"
        />
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      {children}
    </div>
  )
}

export default Layout
