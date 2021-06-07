export default function Quarter({ name, picture }) {
    const url = picture.url ?? picture[0].url
  
    return (
      <div className="flex items-center">
        <img
          src={`${
            url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
          }${url}`}
          className="w-12 h-12 rounded-full mr-4 md:mx-4 grayscale md:hidden"
          alt={name}
        />
        <div className="text-xl font-bold">Under {name}</div>
        <img
          src={`${
            url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
          }${url}`}
          className="hidden w-12 h-12 rounded-full grayscale md:block md:ml-4"
          alt={name}
        />
      </div>
    )
  }
  