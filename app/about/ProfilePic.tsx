import Image from "next/image"

function ProfilePic() {
  return (
    <div id="summary-pic" className="w-20 h-20 aspect-square">
      <Image className="w-full object-cover object-center rounded-full " src="pswu002.png" alt="cartoon-profile-pic" />
    </div>
  )
}

export default ProfilePic