import { NextResponse } from 'next/server'

const COOKIE_NAME = 'ab-optimize'

const experiment = {
  name: 'Featured Icons',
  id: '9bGHhO4uSoeWJD4ucRLYtA',
  variants: [
    {
      name: 'original',
      id: 0,
      weight: 50,
    },
    {
      name: 'Without Icons',
      id: 1,
      weight: 50,
    },
  ],
}

export const config = {
  matcher: ['/'],
}

export function middleware(req) {
  let cookie = req.cookies.get(COOKIE_NAME)?.value

  if (!cookie) {
    cookie = Math.random() < 0.5 ? 0 : 1
    const variant = experiment.variants[cookie]

    cookie = `${experiment.id}.${variant.id}`
  }

  const [, variantId] = cookie.split('.')
  const url = new URL(req.nextUrl)

  if (variantId !== '0') {
    url.pathname = url.pathname.replace('/', '/no-icons/')
  }
  const res = NextResponse.rewrite(url)

  if (!req.cookies.get(COOKIE_NAME)) {
    req.cookies.set(COOKIE_NAME, cookie)
  }

  return res
}




