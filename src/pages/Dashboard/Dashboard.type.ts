import { PageType } from "types/page.type";
import { ResumeContainerProps } from "components/atoms/Resume/Resume.type";
import { BankCollectionContainerProps } from "components/molecules/BankCollection/BankCollection.type";

export interface DashboardContainerType {

}

export interface DashboardPropsType {
  page: PageType
  resume: ResumeContainerProps
  bankCollection: BankCollectionContainerProps
}
