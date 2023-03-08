export default function GettingStarted() {
  return (
    <>
      <h2>Getting started with the G-Grip</h2>
      <div className="c-grid-2 px-4 xl:px-0">
        <div>
          <h5>Attaching the G-Grip plate to your phone</h5>
          <p>
            G-Grip comes with 2 x 3M VHB single use adhesive backed plates which will adhere to smooth, non-textured,
            non-porous, flat surfaces. We recommend a hard plastic or leather case.*{' '}
          </p>
          <p className="mt-4">
            If you experience any trouble peeling off the red backing from the adhesive plate, use a pin to edge it
            away. Position the plate using the guide supplied, leave for 24hrs to harden fully before attaching the
            G-Grip. Choose between landscape ot portrait&nbsp;position.{' '}
          </p>

          <small className="mt-2 block">
            {' '}
            * They will not adhere to rubber, matte glass, silicon, TPU or soft touch&nbsp;coatings.{' '}
          </small>
          <h5 className="mt-4">Turning on</h5>
          <ul>
            <li>Press and hold for 3 seconds.</li>
            <li>Once connected hold shutter for one second to wake up your G-Grip</li>
          </ul>
          <h5 className="mt-4">Pairing G-Grip</h5>
          <ul>
            <li>Activate Bluetooth® on your device.</li>
            <li>Turn on G-Grip by pressing the shutter button until the status light is flashing green.</li>
            <li>Add Bluetooth® device in phone settings.</li>
            <li>Select ‘GGrip’ from the list of available devices.</li>
          </ul>
        </div>
        <div>
          <h5 className="mt-4 md:mt-0">Shooting photos</h5>
          <ul>
            <li>Select Photo mode on your device.</li>
            <li>Press shutter once for single picture.</li>
            <li>For Burst mode, press and hold (for up to 3 minutes).</li>
          </ul>
          <p className="mt-4">
            Note: To configure Burst mode on iPhone, go to Settings &gt; Camera and enable the option to ‘Use Volume Up
            for Burst’.{' '}
          </p>
          <h5 className="mt-4">Shooting videos</h5>
          <ul>
            <li>Select Video mode on your device.</li>
            <li>Press shutter once to record, and again to stop.</li>
          </ul>
          <h5 className="mt-4">Turning off</h5>
          <ul>
            <li>The device will go into automatic standby mode after 4 minutes of inactivity.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
