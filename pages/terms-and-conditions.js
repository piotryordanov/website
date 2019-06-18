import withLayout from "../components/withLayout";
import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

const EntryContent = styled(Box)`
  max-width: 700px;
  margin: auto;

  font-family: "PT Serif", serif !important;
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  height: calc(100% - 20px);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.35;
  font-size: 22px;
  padding-top: 60px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: left;
`;

const Title = styled.div`
  text-align: center;
  font-size: 4.0625rem;
  max-width: 600px;
  margin: 30px auto;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
`;
const Index = () => (
  <EntryContent>
    <Title>Terms and Conditions</Title>
    <h3>
      1. Terms
      <br />
    </h3>
    <p>
      By accessing this web site, you are agreeing to be bound by these web site
      Terms and Conditions of Use, all applicable laws and regulations, and
      agree that you are responsible for compliance with any applicable local
      laws. If you do not agree with any of these terms, you are prohibited from
      using or accessing this site. The materials contained in this web site are
      protected by applicable copyright and trade mark law.
    </p>
    <h3>
      2. Use License
      <br />
    </h3>
    <ol type="a">
      <li>
        Permission is granted to temporarily download one copy of the materials
        (information or software) on PiotrYordanov.com’s web site for personal,
        non-commercial transitory viewing only. This is the grant of a license,
        not a transfer of title, and under this license you may not:<p></p>
        <ol type="i">
          <li>modify or copy the materials;</li>
          <li>
            use the materials for any commercial purpose, or for any public
            display (commercial or non-commercial);
          </li>
          <li>
            attempt to decompile or reverse engineer any software contained on
            PiotrYordanov.com’s web site;
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transfer the materials to another person or “mirror” the materials
            on any other server.
          </li>
        </ol>
      </li>
      <li>
        This license shall automatically terminate if you violate any of these
        restrictions and may be terminated by PiotrYordanov.com at any time.
        Upon terminating your viewing of these materials or upon the termination
        of this license, you must destroy any downloaded materials in your
        possession whether in electronic or printed format.
      </li>
    </ol>
    <h3>
      3. Disclaimer
      <br />
    </h3>
    <ol type="a">
      <li>
        The materials on PiotrYordanov.com’s web site are provided “as is”.
        PiotrYordanov.com makes no warranties, expressed or implied, and hereby
        disclaims and negates all other warranties, including without
        limitation, implied warranties or conditions of merchantability, fitness
        for a particular purpose, or non-infringement of intellectual property
        or other violation of rights. Further, PiotrYordanov.com does not
        warrant or make any representations concerning the accuracy, likely
        results, or reliability of the use of the materials on its Internet web
        site or otherwise relating to such materials or on any sites linked to
        this site.
      </li>
    </ol>
    <h3>
      4. Limitations
      <br />
    </h3>
    <p>
      In no event shall PiotrYordanov.com or its suppliers be liable for any
      damages (including, without limitation, damages for loss of data or
      profit, or due to business interruption,) arising out of the use or
      inability to use the materials on PiotrYordanov.com’s Internet site, even
      if PiotrYordanov.com or a PiotrYordanov.com authorized representative has
      been notified orally or in writing of the possibility of such damage.
      Because some jurisdictions do not allow limitations on implied warranties,
      or limitations of liability for consequential or incidental damages, these
      limitations may not apply to you.
    </p>
    <h3>
      5. Revisions and Errata
      <br />
    </h3>
    <p>
      The materials appearing on PiotrYordanov.com’s web site could include
      technical, typographical, or photographic errors. PiotrYordanov.com does
      not warrant that any of the materials on its web site are accurate,
      complete, or current. PiotrYordanov.com may make changes to the materials
      contained on its web site at any time without notice. PiotrYordanov.com
      does not, however, make any commitment to update the materials.
    </p>
    <h3>
      6. Links
      <br />
    </h3>
    <p>
      PiotrYordanov.com has not reviewed all of the sites linked to its Internet
      web site and is not responsible for the contents of any such linked site.
      The inclusion of any link does not imply endorsement by PiotrYordanov.com
      of the site. Use of any such linked web site is at the user’s own risk.
    </p>
    <h3>
      7. Site Terms of Use Modifications
      <br />
    </h3>
    <p>
      PiotrYordanov.com may revise these terms of use for its web site at any
      time without notice. By using this web site you are agreeing to be bound
      by the then current version of these Terms and Conditions of Use.
    </p>
    <br />
    <p> General Terms and Conditions applicable to Use of a Web Site.</p>
    <br />
  </EntryContent>
);

export default withLayout(Index);
