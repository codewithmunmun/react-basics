import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA5FBMVEVHcEz9SlD/TkL/RUH/RUD/RkP4gyr/SUX/Rj//SE3/Yjb/UDn/Szz9TFb/Yi7/WTT8TVn/cyf/Zi7/iRz/fSL/lRb/SEjeuwX/qQ7/nhP/tgv9TFX6yQj/wwn/zAffugr8zgb+zwnzzQb4ywkvhv82qo79zgQek+ApjurzzAPlywIvhv0qifjRyQEth/y5yAKnxwAoivaMxQUak94fj+hzxAtawxdawhgLpa4OncYVltc8wCobvFIMuWgHqp0KorWaxQEnvz4bvUwPumUNumQMumgIr4wIqaIRvFoNu2MKtnRJwh6BPIl6AAAATHRSTlMAWZDK7P8Orf//Gv///+b/5P7////4dor///8qmP/9K0j/tu7/DeYwRP//HWr/rv///v/b///+HMT///+XTvD/5f//yGzw///////mXfQ9oAAAAWBJREFUeAF0z1UCgCAQRdEZ7O7u/W9STPr93oMCcENi2Y5jWwRBM9fz7zl0QeCFcidRHLMeJAkRj6dZdom/0+Uu62FRlpcQQILsfFVfIrqE/wPWoWleEXstYutdgO9dP9wi++/VCt0dx0dwL5u4DvNyiaFywbB1WS6ymfp+rJSMM5g2H7fYjOCsi5wOIAiCKNhRnG1bazv/fG7erFW/VcNezFEsKWVVZk2bOVi0BVuawE9GbcGOJrxoD3DEZD5ZtAcLdsX9vvWSW/ZM5g+H7JnHhFMcsI+CPpwXVOGSBsT8+Xy9VX5qfQerC77yDP94rEvB8/VCscO4z1f49+db8D9BFJEQ6N64/0hyqhVV03hxIo7+eMNLhmnZimLLjut6msCKZ3qhR+wN0/f9IAjD0PV4kV3rW/QoXF5sC4+KcEAShMkWzBeQ+QaFLX5rKrOWzcQjsHbUgCJbThA4lmwXVv8BPaBVEHC66TMAAAAASUVORK5CYII=",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2108/PNG/512/microsoft_icon_130876.png",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDV2W2nC6DWgBSwFAP7LCqwI9UshjFx--Sw&s",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAllBMVEVHcEz////////////////////////9/f7///////////////////////////////8AAAADBQX29vb/owD/+vG2trbZ2dmZmZn/26n/8d3v7+//9eb/yHpISUn/1Zr/48GmpqY+Pz8jIyP/rxb/u0oxMjJsbW3j4+PAwcH/6Mj/wGHMzMx7fHxfYGDFxcX/tC0NDg6Li4slqlgLAAAAD3RSTlMAooK1rWYj+jfodsRYfMGCSs7OAAABRElEQVQokW2T2XqDIBCFSZsE0w1EUEFi3Jfsff+XK6ttUubG4fzMcZxvBABEa4j+BVxHQMXbH4UQ8nvaqLqFpFOmgqWLTwReXSayPTaxr3z1Cvh7Z4tijO/MSTvgEmb0vsFxjGtf6qH2rFMi9po+w0vTxJN6XkMQkXEkUIgwRCJl2XBpgvB07m27AZjW5huHc6hSdYnv1SjSABRa+1biKQCZ1q4qyXSSPsJKaxVCY28sHqF5Vc9Og24X+1LfkBX97KdHyKyKh6rBOINPQ5guevRMIFYziCinFvKSmuESuySQINolyZEbSMvW4iXoTA8dd7Z525a8cBdowfP2WEp1tGsyH5Okk/lBRS6Vp+T5rNdkba/nCrtoZY6Q9lmByLXND6W83W6dLOfCKlCt9Wbn26BFsbxZmX7old++vP/7H+DX5xaAHw4uN1n/ebb2AAAAAElFTkSuQmCC",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAAkFBMVEUAAACxBg/lCRN1BAq1BhA5AgSvBg+tBg7nCROVBQuqBg8tAgNFAggyAQWeBQ+aBA+kBQ+IAw2TBA6OAw2BAg2cBA7hCRPUCBLtCRSHAw1+AQ2+BhKQAw3JCBInAATPCBMVAQQiAQRsBQo3AwVaAwbZCRMKAQNlAwkdAQNMAwZ5Ag1oAgnCCBImAAVVAwgZAQMGaZOcAAAGhUlEQVR4nO2d61LbOhSFbRNsWYCtm53YmCbQ0hZK6fu/3ZHsJM3FSzCdtmeqrfV7kwnfaO0trchJkkRFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUUR1uYa6vNc/dUN0v3ffut/SpdtBrR6mKsv03xei4u//db/lD4uGdLtXH25SOcVEJJbtEqy7MNMfQmIBITkkrcMOcfM1FNAkt8hJOxlpp4CkgVHSLLV9/N6EkiqR+gceV5PAgm/hctkeV5PAUmaN9g5l2f1JJCkzRIiqc/qaSARCzhzHs/qaSDhNVolGft0Wk8CySJXazhzxGk9CSRpWsGtCXs8PQ4TQSJKvKn/clJPBEkx4E19flJPBEneCLg1aU+SISJIUqGxc06CJDpIXqBzFsf1VJDwuoLOYV+P6qkgyasOH4ePgyQqSKxz4HGY3R3V00Gi1Ao5Z3XkHDJIeGOwc/RhPRkkhdD4OHwUJJFBkgs1IONk7PqgngySVNQdPg4fBkl0kPBK5u9yDhkkC9tMhgwyef1ZTwaJbSa1uYPN5CBIIoSE19ITJG329ZSQVIN8T5BEB4ndmZTmPUESJSTWOTBIYu1mV6/oIMl5MxjUXw+CJFJIhDI4SNrfSCKExDaTWtb4OLyrVzkhJLzWPZo5bNVv64cCMAkQiR3DyrwdJNFCIpSEQRJjV1P9UBRkkLhmot8OkmghsRtYk0LnrKd6zYFzAkWiOk+Q9DTWa87nl0mISPLROcs3giTJwTIJEYltJnYDy2GDnYIkYkicczyfDo9BUif4fIMNEokbw7qHEewUJHVCzC+TUJHUg8HH4TFIooXEOqdRsoMR7Mrd5TOVmJ85oSKpSt3jIClNCCJxYxjeq2DM1pu6mndOsEiaoXvGzrH/de+QcEpIqlL23iDpuW7mnRMmktw2E+scT5C0SZ5L4JwwkYzNZJC970bSs6rnG2ygSNzORElvkHQxAOcEiiS1zaTW3QCRZDcPWs07J1Qko3M6z3FYfqOIRMke30i6+ya1mnVOqEjyyTkKjZwss2fl+WUSLBI3hu3MgY+2sdueHhLRKG3wjaRH0znniDPnhIoknZB0Ehpn1ZjtMqGCZGwm1jk4SHrp5TDnnICRuJmjDb6RlBk7cygh2TnH4CcvxOics9Nw0EhG5+C7fHfzzgkXiW0mo3MqeBxmbubUZ0F9wEhG59hlgm/BFkY6JJwSksouE0+QtN45hwiSdIvEEyRl9qxcNqfNJGQkzjmlluYRNpO8n5oJFSQ753iCpGUvtXMONSRdibcm9jjsnEMFiW0mzjnuOIyfHe7lmXNCRrKfORreq7DHYTdzyCEx18g4GSutc06aSchIds7pEs9nXP0YNxZkkEzLRG6e4dakdc4hhGRyTqm/JgxfXDPWOUf9NWgkk3NqfZ94kno7cxpBB8m0TIbvyTe8qXfnnKP+SgGJ+p4k+F5FZfRxMwkbyeQchwTnjfY4fNxMQkcyLpMPSfKKg6TONRNOBolzjnBIEnivgnFzPIbDR2Kd45Dgi2tru1ur6CBJ90ie4Dkn0x0pJOPMGb9gHH/GlY8zJyeEhE9IBvyYQU8KyeicEck13JpkqisPnBM8Euec6Zv58WXphRkqQQeJWyYTks4TJDnnUEIipmc+r+BxmCl5MHPCR2Kds30MFgVJjN0aokgucJDkZg4dJOkeSYLvj9fy5xgmgCTfI8FB0otzDh0k6R4JDJJYZnSzayYUkBQ7JAl8KJSJbt9MaCHBQdKdUbudCS0kMEhirdS7ZkILyWf86TDvakJI8j2SBD87vO7KbTMhhgRHsNkwVCSR+IIk2UzOoYYEfyHQ0o5hkkiuPTeS1NRMqCHxOGchK04SiYQN9tGOYZJINp7jsKKJxHMj6UWP/ZUeEhgksbZrCpJIPuMIVpScJBLfjSQtaCLBN5Ja7fb0BJH8wI8Z8JomEt+NJM1pIvmEZ04paCLxBEl5k5NEkgjYYJeqoInkFR6HM3vMIYkk8TygUxFFovCPmNdEkXzEt2CrgiYST5B0K4gigTeSsrYhisQTJHGiSBLPl9AVRJF4giROFMl9+xPCaYMNE8niUOkMkmSxOhAbtUWyfJgp/yd1udiCSN3vGWpz8fDl9frmq/dvNldPny66oSpelm2bMYcmYyycVVJwofqHL083P37tBW5eH0xZrJet/L1v7P/T5sNveqH73/VCUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUf+a/gMr0ZcgLc9y4wAAAABJRU5ErkJggg==",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Cloud Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////+9fX+9/b96+vpAAD4xsXyjYrqEADqAADuVlL2s7HyhoPsNS/61tb2rq3wbGjrIxzrLyn1pqTzmJb60tHvZmP3vLv4wcDzk5HtRkL73t3xeXb97ezsQTzuWlb62djqGQ+7TL0FAAAAwElEQVR4AbWQVQLDMAxDF06GZab7n3KxyvBblWy9gNLH/WLci10zISF1CbU0XtZdQmkgKS7Yc4avC/i2ZqJn9pFmht8T/NHEd0CRwiNjNFFGMT7JAY4uE/Sx6QHayXQWg3Ysm5fLURQ7WFpvBfMSxm5ZNcahskCZbWANh1PZIFK7Mg5Wj02HSNUCI8Bv//l4T00jZw2GJEm+GxsOgrGzZD7/jwgIB59l0ymSGeZzbMV8JBQZoPj0qz4eNmRQtpv0B4L4C2q5kuOCAAAAAElFTkSuQmCC",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBSUlIfHx+3t7dERESqqqrT09Nvb28tLS3r6+vl5eWRkZHDw8NgYGD5+fl5eXl0fajXAAAACHRSTlMAMaTd8/+Z3E+2Nl8AAACoSURBVHgBpZNFAsMgFAVJyktwl/uftO4t0cGZ3RdypusPFB/QQ9+RKwP+MjTc03Zo0pEeTXoyoslIKJpQggn2ScYBIZX+K40FnOehLYMK0aQMMJM4JGOfsmhlg2LS5SDO908ZADAdJGPeeoG7TBFQRXkAmoWYcxYvmUu1pqiScgwumlwlylMip2SjizVJBZx3DvaULXbIyZRNJ3uyTCYLbLI0p4p6sh1OWZ0Tavh/KrAAAAAASUVORK5CYII=",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Data Analyst",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$35/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcEzJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADJAADCLji5AAAAFHRSTlMABT92mbDK5EwPWfX/Zr4wKIkc1tA7k5EAAAC/SURBVHgBdchFYgAhAAPA4Bb8/38tXanCXCK4Cam0sW6xRisf8BLRJP6RTBYAfOFSlK8Vl9q8KolkiTBMXcpeHGmxFDKVz8fRYkRv+NBA58P42ADFWyKZ410uHYsmU24hTF5cCDU60uDincdieClYpIt4CSyKF30ff3heInYGLw07wXFJAVuWy8Se5mKwl7ko7FUuHnsjkRzYE5N0AQeFtDjppMaJJzNOGllxElwaOJpO4MgUnCmNM59xNgZ++gBSxAt41Ko57AAAAABJRU5ErkJggg==",
    companyName: "Tesla",
    datePosted: "8 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEL0lEQVR4AWIgFsjdSeKRu51kKXcL0Hs5ANmxhFH4xbY1q2fbtm3PnWe/mIXYtm3bto21Ylur71QmqcndmTWqTt3p7t/qXvN/Y585DCzle7Ogb+3x/Z8RZj4h2gwLzoDiygi2UDDX2PvjEWPPjwkg2QMJ0ByGdjY8JgZXyrLigHBfEYR8auw11yD0qhRkElfhXYWMjwMirMKZVV4JL7qg+KyEZQfIOIOsjgHhVoUMKYe4JpgEc6IE5BASkTkuIMxXPW3l5AzCiWLKFWAE0XWPhPKksEOYlBvKHZHoYERahVJ7H2p+lqGcZ78mTqPrI//QV6ZiV7sQXwAxWL0OzLB7vTe57AZPD9YDwQSwBP7d0B7NSMdAuwL+ik7vLScj37vZawxehTCYWVDGiLIK14z7KZ9/5GpF/1zQiLCKQ1MF2gcUSQxqB5Yj56RXi0L3wzXlEb6SEM9xes3he9kfYFYpI9T3FLLb4vG+VF1FRCnIEoQfIqaXw4CLGh62cUU5D2T9LPgCpj/5bUgKmrHfmPX/rH9E0VvyHqWVjYifCjoNCYr5NR/0QdC2QPYJh56D8Dym8P/vP145DIOhL5iN9ZEqTpDoUVRJ4BIg/+YOtRoy/7ENKnKjyw7+np/9Xg6+BNZ/3aLCykDlJthGHAax8ETzGyel4LzL0Eqy74TxKHmHFi8WEGYVYT3EScfZQBmw1EPpSV1AELUAX+GR0nA3CCKkAZyFsHc/4X+ZPVPjFiwiCoedBslwu4Mmsz7nVwcLlILNbrcah38HRGbuEsGgEjJKabW74GI6k3GdlwFXOPw+IPrnQnhbC5oXwI+gIULb4GV70EKKwBcofQK6KgGRPxVwGFMWGV9At1IR8TbAOwXxnM1HQCjfCl1SGvVxCrqd0A/HoG9QXqNWlJVPhgSEmTU5X+thwAIZMDTDc5yQgjNSCE5rnco7BprdDWrXmhhTnb1VbjIxdoBS8J/HKyfR9moENE3Bt+A1Jt5TPLse5fdJCvA19r4HLaGbpag5DEoQP9ikyecSOU3DP8kVgmgZF4K9nN12PafVQ335uMWKUJillV/Gb+larKtEmvnsyVcIw+7QDNArSnWUTmsfxIFHuYapXAaOC8EhhP0kzzVOwTiwDGwC28Bmez0aNEHYq0SlnIzBkAoaMpKRRgdMh7749cvI9AoTSMjgNXseoRsCQs16yj0dUUT970F7BZ3f3fwSol1y6tGBrK0oH4Wi4x7eL8PICv4Pko9V4XnwIDmFrve9nmQd8+BJ1pYCLuT1T0gFFVuuGUBaeAOUT3Oe6+ksI3LhWT4aB6tm9B8TRaJDjtQEE1NhT89z95oINT+0u+NK5hXDoxuRgsNzcp7FPwZMRY1bhM3UYHHOBY+5cVBDRgPMbrWc+UNYCYx5TBMO6Dm+EKwH68ACMECznZnyqCZcRuWmAMFguk4gWsrvAAAAAElFTkSuQmCC",
    companyName: "Spotify",
    datePosted: "12 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  }
  ];
  
  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, index){
        return <div key = {index}>
          {/* index is used as key here because we are not modifying the list and it is static. 
          (so that react knows which item has changed, it's considered as a best practice).
          In real world applications, we should use unique id as key instead of index. */}
          <Card brandLogo={elem.brandLogo} company={elem.companyName} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App