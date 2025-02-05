/**
 * https://flowbite.com/docs/components/avatar/#bordered
 * https://flowbite.com/docs/components/avatar/#sizes
 * https://flowbite.com/docs/components/avatar/#bordered
 */
export default function ProfilePicture() {
  return (
    <div className="flex flex-wrap gap-2">
      <img className="rounded-full ring-3 ring-gray-300 dark:ring-gray-500 w-36 h-36" src="/profile-pixel-art-upscaled.png" alt="Extra large avatar"></img>
    </div>
  );
}
