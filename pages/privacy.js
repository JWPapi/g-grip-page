import Footer from "../components/Footer";
import Head from "next/head";


export default function Privacy() {
  return (
    <>
      <Head>
        <title>G–Grip by Greg Williams – Privacy </title>
      </Head>
      <div className="pt-16 px-4 md:px-0">
        <article className="mx-auto prose my-16">
          <h1>Privacy</h1>
          <p>
            This privacy statement provides you with details of how Greg Williams Photography Limited (“GWP”) will
            collect, store and use the personal data you supply to it as the operater of this website (the “Website”).
          </p>
          <p> This page is used to inform website visitors regarding our policies with the collection, use, and
            disclosure
            of personally identifiable information (“Personally Identifiable Information”).
          </p>
          <p> If you choose to use the Website, then you agree to the collection and use of information in relation with
            this policy. The Personally Identifiable Information that we collect is used for providing and improving
            the
            services we provide. We will not use or share your information with anyone except as described in this
            Privacy
            Policy.
          </p>
          <p> The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are
            accessible through the Website, unless otherwise defined in this Privacy Policy.
          </p>
          <p> Collection of Personally Identifiable Information
            In using this Website, you may provide certain personally identifiable information to GWP. By providing
            such
            information you consent to its use and storage in accordance with the provisions of this Privacy Policy.
            We
            may collect information about your computer, including where available your IP address, operating system
            and
            browser type, for system administration and to report aggregate information.
          </p>
          <p> Storage and Collection of Personally Identifiable Information
            GWP will hold your information only for as long as necessary for each purpose we use it for and to comply
            with
            our legal obligations. We are obliged to supply you, on request, with a copy of the personally
            identifiable
            information we hold about you. If you wish to find out what information we hold for you, or to have it
            amended
            or removed from our database and Website, or if you have any questions about this Privacy Policy, you can
            email us at info@gwshop.uk at any time and we will respond in a timely manner. We may charge a reasonable
            fee
            for data subject access requests. Should you discover any inaccuracies in such personally identifiable
            information, please notify us as soon as possible and we will then correct our records.
          </p>
          <p> Use of Personally Identifiable Information
            GWP shall only use your personally identifiable information for the purposes for which it is provided or
            for
            purposes to which you have expressly consented. In addition if you expressly consent, we will be able to
            contact you with information and news updates about GWP. We will ensure all communications you receive
            from us
            are relevant and of appropriate frequency. We do not allow third parties to use the data we collect.
          </p>
          <p> Cookies
            Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier.
            These
            are sent to your browser from the website that you visit and are stored on your computer’s hard drive.
          </p>
          <p> The Website uses these “cookies” to collect information and to improve our services. You have the option
            to
            either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you
            choose to
            refuse our cookies, you may not be able to use some portions of our services.
          </p>
          <p> Service Providers
            We may employ third-party companies and individuals due to the following reasons:
            To facilitate our services;
            To provide the service on our behalf;
            To perform related services; or
            To assist us in analysing how our services are used.
          </p>
          <p> We want to inform our users that these third parties may have access to your Personally Identifiable
            Information. The reason is to perform the tasks assigned to them on our behalf. However, they are
            obligated
            not to disclose or use the information for any other purpose.
          </p>
          <p> Security
            We value your trust in providing us your Personally Identifiable Information, thus we are striving to use
            commercially acceptable means of protecting it. But remember that no method of transmission over the
            internet,
            or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute
            security.
          </p>
          <p> Links to Third Party Websites
            GWP may provide links to third party websites and equally links to the Website may appear on third party
            websites. This Privacy Policy applies solely to the personal data collected by the Website and does not
            apply
            to third party websites and services that are not under our control.
          </p>
          <p> Last updated: December 2020</p>
        </article>
      </div>
      <Footer/>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Privacy Policy",
    },
  };
}
