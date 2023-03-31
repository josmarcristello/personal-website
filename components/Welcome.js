import siteMetadata from "@/data/siteMetadata"
//import Icon from "@/components/icons"
import SocialIcon from '@/components/social-icons'
import Image from "next/image"

export default function Welcome() {
  return (
    <div className="mb-10 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      <div className="flex flex-col items-center space-x-2 pt-8">
        <Image
          src={siteMetadata.image}
          alt="avatar"
          height={250}
          width={250}
          className="rounded-full"
        />
        <div className="hover:text-primary-600 dark:hover:text-primary-400 flex space-x-3 pt-6">
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.github} size="6" />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
        </div>
      </div>
      <div className="prose dark:prose-dark pt-8 pb-8 xl:col-span-2">
        <h2>Hey, I am Josmar Cristello</h2>
        <p>
          I am a PM and indie-maker based in Singapore. Love to tinker with side projects whilst self-teaching software development and design. Occasionally, I write essays on calm life, exploration, experiments and making sense of the world. 
          My{" "} <a href="https://twitter.com/kirso_"> DMs</a> are always open.
        </p>
      </div>
    </div>
  )
}
