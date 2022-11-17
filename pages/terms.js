import Footer from "../components/Footer"
import Head from "next/head";

export default function Terms() {
  return (<>
      <Head>
        <title>G–Grip by Greg Williams</title>
      </Head>

      <div className="pt-16 px-4 md:px-0">

        <article className="mx-auto prose my-16">
          <h1>Terms & Conditions</h1>
          <p>
            The pages on the website (“the Website”) are published by Greg Williams Photography Limited, registered in
            England at PO Box 1295, 20 Station Road, Gerrards Cross, Buckinghamshire SL9 8EL with company registration
            number 04557292 (“GWP”).
          </p>
          <p> The Website is intended to serve as an introduction to our company, by giving an outline of the products
            and services provided through the Website and by providing details of how we can be contacted. The terms and
            conditions set out below govern the use by you of the Website. We reserve the right to change the terms of
            use of the Website at any time and you are requested to check the terms of use from time to time to ensure
            that you have seen the latest version.
          </p>
          <p> Copyright and Trademarks Subject to the provisions below, the copyright in all content, graphics, tables,
            images on the Website belongs to us or our clients and/or licensors and is hereby asserted. Any copying or
            modification of all or any part of the Website is hereby prohibited with the exception that clients and
            prospective clients are welcome to take a copy of the pages of the Website, which do not contain materials
            relating to our clients, as a record of its contents and for personal use only.
          </p>
          <p> The Website also contains materials belonging to our clients. These are displayed on the Website with
            their kind permission, for the purpose of promoting the range of services offered by us and are for display
            only. Any copying of such materials is strictly prohibited. Please contact us if you require any further
            clarification in this regard. We hereby assert and reserve all our copyright, design right, moral rights,
            the moral rights of our employees, community design rights and all other rights in law of whatever type
            anywhere in the world to protect our intellectual property, goodwill and reputation.
          </p>
          <p> If you purchase a print from the Website, please be aware you are purchasing that print only and not any
            underlying copyright in such print. Please ensure that the prints are not reproduced or published in any
            other manner or media.
          </p>
          <p> Online Commerce You agree to be financially responsible for all purchases made by you or someone acting on
            your behalf through the Website. You agree to use the Website and to purchase services or products through
            the Website for legitimate, non-commercial purposes only. You also agree not to make any purchases for
            speculative, false or fraudulent purposes or for the purpose of anticipating demand for a particular product
            or service. You agree to only purchase goods or services for yourself or for another person for whom you are
            legally permitted to do so. When making a purchase for a third party that requires you to submit the third
            party’s Personally Identifiable Information to us or a merchant, you represent that you have obtained the
            express consent of such third party to provide such third party’s information.
          </p>
          <p> Disclaimers Throughout the Website, we may provide links and pointers to other sites maintained by third
            parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites,
            or the information, products or services offered on or through the sites. In addition, neither we nor
            affiliates operate or control in any respect any information, products or services that third parties may
            provide on or through the Website or on websites linked to by us on the Website.
          </p>
          <p> If applicable, any opinions, advice, statements, services, offers, or other information or content
            expressed or made available by third parties, including information providers, are those of the respective
            authors or distributors, and not GWP. Neither GWP nor any third-party provider of information guarantees the
            accuracy, completeness, or usefulness of any content. Furthermore, GWP neither endorses nor is responsible
            for the accuracy and reliability of any opinion, advice, or statement made on any of the Website by anyone
            other than an authorized GWP representative while acting in his/her official capacity.
          </p>
          <p> ANY INFORMATION OFFERED ON OR THROUGH THE WEBSITE AND BY GWP AND ANY THIRD-PARTY SITES ARE PROVIDED “AS
            IS” AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. IN RELATION TO SUCH INFORMATION, TO THE
            FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
            INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
            WE DO NOT WARRANT THAT THE WEBSITE OR ANY OF ITS FUNCTIONS WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS
            WILL BE CORRECTED, OR THAT ANY PART OF THIS WEBSITE, ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THIS
            DOES NOT AFFECT YOUR STATUTORY RIGHTS.
          </p>
          <p> Please check the Policies section of this Website for details of any specific product warranties that may
            be offered by any relevant manufacturer of goods sold through this Website.
          </p>
          <p> You agree at all times to defend, indemnify and hold harmless GWP its affiliates, their successors,
            transferees, assignees and licensees and their respective parent and subsidiary companies, agents,
            associates, officers, directors, shareholders and employees of each from and against any and all claims,
            causes of action, damages, liabilities, costs and expenses, including legal fees and expenses, arising out
            of or related to your breach of any obligation, warranty, representation or covenant set forth herein.
          </p>
          <p> Compliance All parties are required to comply with UK legislation relating to websites and e-commerce.
          </p>
          <p> Unauthorised Use of the Website The following uses are unauthorised, a breach of these conditions and may
            be an infringement or even a crime: — Any unauthorised use or copying of our name, trading style, get-up,
            confidential information or data (being information of a confidential nature the misuse of which will
            foreseeably damage our business reputation or goodwill) or copyright material; — Unauthorised entry to any
            non-public part of the Website, including its underlying codes, or into any of our private computer system;
            — Unauthorised copying, downloading or framing of any part of the Website; — Unauthorised covert or overt
            linking of any part of our Website with another or interception of visitors or potential visitors; and — Any
            action which is intended or has the effect of deceiving or misleading us or third parties, whether for gain
            or otherwise.
          </p>
          <p> English Law The Website and its contents are governed by English law.
          </p>
          <p> Last updated: February 2021
          </p>
        </article>
      </div>
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: "Terms and Conditions",
    },
  }
}
