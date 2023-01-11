import React from 'react'
import { DownloadContainer, DownloadIntroContainer, DownloadColumnWrap, DownloadHeading, DownloadSub, Column1, Column2, C1Platform,C1Header,C1des,C2Platform,C2Header,C2des, Column1Wrap, Column2Wrap, Button1Wrap, Button2Wrap } from './DownloadElements'

const Download = () => {
  return (
    <DownloadContainer>
      <DownloadIntroContainer>
        <DownloadHeading>Download ARTHEQ on Mobile</DownloadHeading>
        <DownloadSub>Access ARTHEQ and begin your specialized discovery journey.</DownloadSub>
      </DownloadIntroContainer>
      <DownloadColumnWrap>
        <Column1>
          <Column1Wrap>
            <C1Platform>Mobile</C1Platform>
            <C1Header>Android</C1Header>
            <C1des>Download ARTHEQ on Android devices.</C1des>
          </Column1Wrap>
          <Button1Wrap>
          </Button1Wrap>
        </Column1>
        <Column2>
          <Column2Wrap>
            <C2Platform>Mobile</C2Platform>
            <C2Header>iOS</C2Header>
            <C2des>Download ARTHEQ on iOS devices.</C2des>
          </Column2Wrap>
          <Button2Wrap>
          </Button2Wrap>
        </Column2>
      </DownloadColumnWrap>
    </DownloadContainer>
  )
}

export default Download