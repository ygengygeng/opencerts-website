import dynamic from "next/dynamic";
const SITCerts = dynamic(import("./SITCerts"));
const DefaultCert = dynamic(import("./Default"));
// import NPAA2018MAIN from "./NgeeAnnPolytechnic/NP-AA2018-MAIN";
// import NPAA2018OPTION from "./NgeeAnnPolytechnic/NP-AA2018-OPTION";
const NPAA2018BMSCLT = dynamic(
  import("./NgeeAnnPolytechnic/NP-AA2018-BMS(CLT)")
);
const NPAA2018ECH = dynamic(import("./NgeeAnnPolytechnic/NP-AA2018-ECH"));
// import NPAA2018LDH from "./NgeeAnnPolytechnic/NP-AA2018-LDH";
// import NPAA2018PHARM from "./NgeeAnnPolytechnic/NP-AA2018-PHARM";
const NPAA2018DPP = dynamic(import("./NgeeAnnPolytechnic/NP-AA2018-DPP"));
// import NPAA2018DPP from "./NgeeAnnPolytechnic/NP-AA2018-DPP";
const GOVTECHOPENCERTS = dynamic(import("./GovTech"));

import InvalidCertificateNotice from "./InvalidCertificateNotice";

import { getLogger } from "../../utils/logger";
const { trace } = getLogger("components:TemplateLoader");

import React from "react";

export const templates = {
  default: DefaultCert,
  // "NP-AA2018-MAIN": NPAA2018MAIN,
  // "NP-AA2018-OPTION": NPAA2018OPTION,
  "NP-AA2018-BMS(CLT)": NPAA2018BMSCLT,
  "NP-AA2018-ECH": NPAA2018ECH,
  // "NP-AA2018-LDH": NPAA2018LDH,
  // "NP-AA2018-PHARM": NPAA2018PHARM,
  "NP-AA2018-DPP": NPAA2018DPP,
  "SG-GOVTECH-OPENCERTS": GOVTECHOPENCERTS,
  SITCerts
};

export class TemplateLoader extends React.Component {
  render() {
    const { templateName, certificate } = this.props;
    const TemplateName = templates[templateName] || templates.default;
    trace(`Loaded template: ${templateName}`);
    trace(`Rendering cert: %o`, certificate);
    return <TemplateName certificate={certificate} />;
  }
}
