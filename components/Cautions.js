import Image from 'next/image'

export default function Cautions() {
  return (
    <section>
      <hr className="mb-2" />
    <div className="text-neutral-500 mb-8 text-xs md:text-sm px-4 xl:px-0 flex flex-col gap-4">
      <p>
        The user is cautioned that changes or modifications not expressly approved by the party responsible for
        compliance could void the user’s authority to operate the equipment. This device complies with Part 15
        of the FCC Rules. Operation is subject to the following two conditions: (1) this device may not cause
        harmful interference, and (2) this device must accept any interference received, including interference
        that may cause undesired operation. NOTE: This equipment has been tested and found to comply with the
        limits for a Class B digital device, pursuant to Part 15 of the FCC Rules. These limits are designed to
        provide reasonable protection against harmful interference in a residential installation. This equipment
        generates, uses and can radiate radio frequency energy and, if not installed and used in accordance with
        the instructions, may cause harmful interference to radio communications. However, there is no guarantee
        that interference will not occur in a particular installation. If this equipment does cause harmful
        interference to radio or television reception, which can be determined by turning the equipment off and
        on, the user is encouraged to try to correct the interference by one or more of the following measures:{' '}
      </p>
      <ul className="list-decimal ml-4">
        <li>Reorient or relocate the receiving antenna</li>
        <li>Increase the separation between the equipment and receiver</li>
        <li>
          Connect the equipment into an outlet on a circuit different from that to which the receiver is
          connected
        </li>
        <li>Consult the dealer or an experienced radio/TV technician for help</li>
      </ul>
      <div>
        <h5>FCC Radiation Exposure Statement</h5>
        <p>
          This equipment complies with FCC radiation exposure limits set forth for an uncontrolled environment.
          This transmitter must not be co-located or operating in conjunction with any other antenna or
          transmitter.{' '}
        </p>
      </div>
      <div>
        <h5>Recycling</h5>
        <p> Please recycle all materials used in packaging.</p>
      </div>
      <p>
        Designed and developed in the UK. Made in China. <br /> Patent pending.
      </p>
    </div>
    </section>
  )
}
