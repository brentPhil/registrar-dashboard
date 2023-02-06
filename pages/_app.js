import Sidebar from "@/components/Sidebar"
import "@/styles/globals.css"
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: "400",
  weight: "600",
  weight: "700",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }) {
  return (
    <Sidebar width="64" className={poppins.className}>
      <Component {...pageProps} className={poppins.className} />
    </Sidebar>
  )
}
