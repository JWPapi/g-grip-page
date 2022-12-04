import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function SkillsBanner() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-primary p-2">
              <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
             One time offer for G-Grip Customers
            </p>
          </div>

          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3" />

        </div>
      </div>
    </div>
  )
}
