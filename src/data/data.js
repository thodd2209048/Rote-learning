const articlesData = [
  {
    id: 1,
    title: "Depth First Search or DFS for a Graph",
    link: "https://docs.google.com/document/d/19MqT2k579XIGYhY1Iq5Hk-hds1SpSBOIzMJi3gVS0A0/edit",
    status: "incomplete",
    subject: "programming",
    tags: ["algorithm"],
    createDate: "03-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 2,
    title: "Package trong Golang",
    link: "https://docs.google.com/document/d/1ocn-dE4KUMLe0M-ELS_4FYJEp0fjnWt2VRUQHsliQKY/edit#",
    status: "incomplete",
    subject: "programming",
    tags: ["golang"],
    createDate: "03-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 3,
    title: "20230304 ghi chú",
    link: "https://docs.google.com/document/d/1mWthd7SDrzsu2zmbbsDHEpTFHjUwfKolJzwpz_0ISEg/edit",
    status: "incomplete",
    subject: "diary",
    tags: ["react"],
    createDate: "03-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 4,
    title: "React - Vscode - snippet thường dùng",
    link: "https://docs.google.com/document/d/1v5TgmV0oZHj931YEB6sIw0OHtcVuNOB8yxv-zkMPYY8/edit",
    status: "incomplete",
    subject: "programming",
    tags: ["react", "vscode"],
    createDate: "03-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 5,
    title: "Cách GHI NHỚ và ỨNG DỤNG mọi kiến thức đã học (3 bước đơn giản!)",
    link: "https://docs.google.com/document/d/1FaIwi3con8Q_cpcAb39YvQH0ZtmJTda9XDtRAqY2rcA/edit",
    status: "completed",
    subject: "study-method",
    tags: ["study-method", "note"],
    createDate: "04-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 6,
    title: "Tôi đi code dạo",
    link: "https://docs.google.com/document/d/16rzvYcysC_OKczrDcd197Ot8FiG0hR4U-W6VMGI7ztM/edit",
    status: "completed",
    subject: "study-method",
    tags: ["study-method", "note"],
    createDate: "05-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 7,
    title: "The World for Sale - P6 - Dầu giấy",
    link: "https://docs.google.com/document/d/1nIujyJ48H0UKJP6RZ1cV7obtdGjklhqZEH65zhCdhRo/edit",
    status: "completed",
    subject: "economic",
    tags: ["book"],
    createDate: "05-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 8,
    title: "The World for Sale - P7 - Marc Rich ngã ngựa",
    link: "https://docs.google.com/document/d/1bbtPgFN-WI7MxTCNxWQqHLCCKu6y2WmL_p0gGG9E6Xc/edit?usp=share_link",
    status: "completed",
    subject: "economic",
    tags: ["book"],
    createDate: "05-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 9,
    title: "The World for Sale - P8 - Vụ bán tháo lớn nhất lịch sử",
    link: "https://docs.google.com/document/d/1JQmMbpIwSa_0sfaJw-9zI2jZz4xFcw9_prb4aspVEMc/edit?usp=sharing",
    status: "completed",
    subject: "economic",
    tags: ["book"],
    createDate: "05-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 10,
    title: "The World for Sale - P9 - Cộng sản với ảnh hưởng của Tư bản",
    link: "https://docs.google.com/document/d/1RDQLtigSoYMnpN94zaoF9ik71V5RAtcfZe-aAI3RmcQ/edit?usp=share_link",
    status: "completed",
    subject: "economic",
    tags: ["book"],
    createDate: "05-04-2023",
    editDate: "",
    lastTimeRead: "",
  },
  {
    id: 11,
    title: "Cách viết resume và nộp đơn cho vị trí liên quan tới Tech",
    link: "https://docs.google.com/document/d/1rHsvEby6e7p1qyHCfHwYvLB8nTvxODAb53CDVWV5fGM/edit",
    status: "completed",
    subject: "career",
    tags: ["recruitment"],
    createDate: "17-03-2023",
    editDate: "",
    lastTimeRead: "06-04-2023",
  },
  {
    id: 12,
    title:
      "Chuyến đi Mỹ của bà Thái Anh Văn: chia rẽ chính trị ngày càng sâu sắc ở Đài Loan",
    link: "https://docs.google.com/document/d/1hkDxOJH4jT21_6CgxGl4ieuRfq4x10z8QwWkgdbCOls/edit",
    status: "completed",
    subject: "news",
    tags: ["news"],
    createDate: "06-04-2023",
    editDate: "",
    lastTimeRead: "06-04-2023",
  },
  {
    id: 13,
    title: "React useMemo",
    link: "https://docs.google.com/document/d/1LsNjG10oyIkTDI6YDig3lXWynBpYRlm9z_mrdtMeZe8/edit",
    status: "completed",
    subject: "programming",
    tags: ["react"],
    createDate: "05-03-2023",
    editDate: "",
    lastTimeRead: "06-04-2023",
  },
  {
    id: 14,
    title: "20230604 Câu hỏi phỏng vấn JS",
    link: "https://docs.google.com/document/d/10_eC8jHHi1FAy6or8n6efisHrnse-PGeDWwXsqAj-jg/edit",
    status: "completed",
    subject: "career",
    tags: ["Java-Script", "cau-hoi-phong-van"],
    createDate: "06-04-2023",
    editDate: "",
    lastTimeRead: "06-04-2023",
  },
  {
    id: 15,
    title: "React / useReducer",
    link: "https://docs.google.com/document/d/1Hy0vLZsb0sxJTykq0a1q6c8t2WWbbFGqivbMqs7yO2w/edit",
    status: "completed",
    subject: "programming",
    tags: ["react"],
    createDate: "11-03-2023",
    editDate: "",
    lastTimeRead: "06-04-2023",
  },
  {
    id: 16,
    title: "React / useReducer",
    link: "https://docs.google.com/document/d/1aFEBInxcXwPeV76n1AX60FxltKFq4wCvGGsArUJ8d0E/edit",
    status: "completed",
    subject: "programming",
    tags: ["react"],
    createDate: "12-03-2023",
    editDate: "",
    lastTimeRead: "06-04-2023",
  },
  {
    id: 17,
    title: "What Is a Web Server?",
    link: "https://docs.google.com/document/d/17MQ-IhF2AH_gM3bbVQFRbnKdujvjqCnuG5cMEnFB-Co/edit",
    status: "completed",
    subject: "programming",
    tags: ["web"],
    createDate: "07-04-2023",
    editDate: "",
    lastTimeRead: "07-04-2023",
  },
  {
    id: 18,
    title: "Trình duyệt web là gì?",
    link: "https://docs.google.com/document/d/1u-LaAmfaeeDWkXqUwrczOFoRWoK4YH5N4iD2IYeUVr8/edit#",
    status: "completed",
    subject: "programming",
    tags: ["web"],
    createDate: "07-04-2023",
    editDate: "",
    lastTimeRead: "07-04-2023",
  },
  {
    id: 19,
    title: "20230409 ghi chú code",
    link: "https://docs.google.com/document/d/13jKICqExxty1NHkhw6FyWb2zY50vfvLAC8iPXCvs0vk/edit",
    status: "completed",
    subject: "diary",
    tags: ["note"],
    createDate: "09-04-2023",
    editDate: "",
    lastTimeRead: "09-04-2023",
  },
  {
    id: 20,
    title: "Phương thức match() trong JS",
    link: "https://docs.google.com/document/d/1dPGFSKLDKE_fMu0L7zOb7vwnqx6xgL8GNRO5BVxtvdA/edit",
    status: "completed",
    subject: "programming",
    tags: ["Java-Script"],
    createDate: "10-04-2023",
    editDate: "",
    lastTimeRead: "10-04-2023",
  },
  {
    id: 21,
    title: "Shallow copy trong Java Script",
    link: "https://docs.google.com/document/d/1NC1OdGRVnu6UsAV34czUFHKbBBbyix5a0eQv9beEoTA/edit",
    status: "completed",
    subject: "programming",
    tags: ["Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 22,
    title: "Cân bằng giữa nhận thức và lo lắng",
    link: "https://docs.google.com/document/d/1mIUnOBAqraY_XsgJioubIliENcZeXrv68m5G6Io8oqE/edit",
    status: "completed",
    subject: "philosophy",
    tags: ["stoicism"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 23,
    title: "Khuyến khích chính mình bởi phẩm chất của những người xung quanh",
    link: "https://docs.google.com/document/d/1YQX8lmV0p95UTIifZeK7f8X0QP1XJgON2dknIyhpFlc/edit",
    status: "completed",
    subject: "philosophy",
    tags: ["stoicism"],
    createDate: "04-02-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 24,
    title: "The World for Sale - P10 - Big bang",
    link: "https://docs.google.com/document/d/1veRZVU7U5zuhgu9HR-zLg5Pm0dSz1Dtz7XBBV9thOeU/edit",
    status: "completed",
    subject: "economic",
    tags: ["book"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 25,
    title: "Meta front-end - JavaScript DOM manipulation",
    link: "https://docs.google.com/document/d/1zmpXVxlG7XF0wxztOP_UMjeBp_LAqBd6bkoPl7LsxrM/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 26,
    title: "Meta front-end - JavaScript selectors",
    link: "https://docs.google.com/document/d/1pdShW0WuuvPizAztP6vQhyzRwtreXM0UvgaCDzRrfTU/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 28,
    title: "Meta front-end - Event handling",
    link: "https://docs.google.com/document/d/1yaEL1RRlgrYoS92085z87wpOJDoBNCJLtRWgVnYPIoY/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 28,
    title: "Meta front-end - Exercise: Web page content update",
    link: "https://docs.google.com/document/d/1OlkOqOthpo71dYDsjBU2VazSCpOUPzzV1YbwD5EiV-c/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 28,
    title: "Meta front-end - Exercise: Capture Data",
    link: "https://docs.google.com/document/d/1OqBezzftkjHI364D1vLUR4V018ksxtNDCjdm5GybZ1M/edit#",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 29,
    title: "Meta front-end - JavaScript Object Notation - JSON",
    link: "https://docs.google.com/document/d/1jNTEWU6toPzilSMUF7lrFngJCLn1SevUyI7UNNNfAjo/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 30,
    title: "Meta front-end - Other JavaScript environments - node & NPM",
    link: "https://docs.google.com/document/d/1IH0iak178KYlM6ps9go6ImCHAXenw-z86Esi9tfzvoQ/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 31,
    title: "Working with JSON",
    link: "https://docs.google.com/document/d/1TVVBfZoD1iuoTdx2lf8_EtBUVwmK-ems_a7E6bZgfVA/edit#",
    status: "completed",
    subject: "programming",
    tags: ["Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 32,
    title: "What is testing?",
    link: "https://docs.google.com/document/d/1JEtWJ0mGOQtZZkQ82no3YyvwHdl1oZSyiYA4afS4wmU/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 33,
    title: "Meta front-end - Types of testing",
    link: "https://docs.google.com/document/d/119lPc98mhgWcQ1kCM9bt2o964FGC_W4ZCmK0YJmqeH8/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "13-04-2023",
    editDate: "",
    lastTimeRead: "13-04-2023",
  },
  {
    id: 34,
    title: "Meta front-end - Writing tests with Jest",
    link: "https://docs.google.com/document/d/1tWQ5BishYTwlUSIKxKAu9Wter8UypvOcRK-sorMGKOU/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "14-04-2023",
    editDate: "",
    lastTimeRead: "14-04-2023",
  },
  {
    id: 35,
    title: "Meta front-end - Writing tests with Jest",
    link: "https://docs.google.com/document/d/1C54NaPsmT70vn9YwW9x0buDm9_s_atR_OugYkkjU6vM/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "14-04-2023",
    editDate: "",
    lastTimeRead: "14-04-2023",
  },
  {
    id: 36,
    title: "Meta front-end - Module summary: Testing",
    link: "https://docs.google.com/document/d/1j7gL857KpvPsJyPs9_PpUgaHkKM2TWlNYeSMyVCOyxM/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "Java-Script"],
    createDate: "14-04-2023",
    editDate: "",
    lastTimeRead: "14-04-2023",
  },
  {
    id: 37,
    title: "Meta front-end - Introduction to the course Version Control",
    link: "https://docs.google.com/document/d/1vHZ2TOaGXf8LlcI9ueWUtEUXaGMPNkPc7a6416X4h98/edit",
    status: "completed",
    subject: "programming",
    tags: ["version-control"],
    createDate: "14-04-2023",
    editDate: "",
    lastTimeRead: "14-04-2023",
  },
  {
    id: 38,
    title: "Meta front-end - 121. Systems of version control and tools",
    link: "https://docs.google.com/document/d/14Rv97V9mCzusgrlh33CwpY8qZjs4PNzLXo9XyhRV_Cg/edit",
    status: "completed",
    subject: "programming",
    tags: ["version-control"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },

  {
    id: 39,
    title: "Meta front-end - 122. A history of version control",
    link: "https://docs.google.com/document/d/1k8BKvodhsQXuiVbISLt7w5fPIoJV5cRlSRtRTarfkrg/edit#",
    status: "completed",
    subject: "programming",
    tags: ["version-control"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 40,
    title:
      "Meta front-end - 123. Version control in professional software development",
    link: "https://docs.google.com/document/d/1MuD2ZB9_85km-4Y2yk-KBGLANS_mwcPdibYPW2zim6w/edit#",
    status: "completed",
    subject: "programming",
    tags: ["version-control"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 41,
    title: "Meta front-end - 124. A history of revisions",
    link: "https://docs.google.com/document/d/1Bqv8hjUfsXpolW3BuGPukHFXghobM2X-cJXZB93f8BQ/edit#",
    status: "completed",
    subject: "programming",
    tags: ["version-control"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 42,
    title: "Meta front-end - 125. Staging vs. Production",
    link: "https://docs.google.com/document/d/1KUwST5CIfdwYsQv8mcvm1HL5QsdYjLAyssNPjk9deGk/edit#",
    status: "completed",
    subject: "programming",
    tags: ["version-control"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 43,
    title: "Meta front-end - 126. The Command line",
    link: "https://docs.google.com/document/d/1kHsIVTbOkrjP5DVC3KgYV8lajPLDO09lBrKlvG_IgLE/edit",
    status: "completed",
    subject: "programming",
    tags: ["git"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 44,
    title: "Meta front-end - 127. What are Unix commands?",
    link: "https://docs.google.com/document/d/1MsnfZJhT4MBpU-KD81Rlt_87Bpb37Ci9t3Zs5T8JtPs/edit",
    status: "completed",
    subject: "programming",
    tags: ["git"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 45,
    title: "Meta front-end - 128. Using Bash on Mac Terminal",
    link: "https://docs.google.com/document/d/1_st3fkwL6obP65FJccpsK8E0PrpKK39los-ztV1nuc0/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 46,
    title: "Meta front-end - 129. Using Bash on Windows",
    link: "https://docs.google.com/document/d/13u6atGuP4DF1la0U3JGe7cma5dqMFcNmYAjIpNh7OME/edit",
    status: "completed",
    subject: "programming",
    tags: ["git"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 47,
    title: "Meta front-end - 130. Creating and moving directories and files",
    link: "https://docs.google.com/document/d/1tGHbyokQlOVs_w3Si5LDLdwOxwRdtss_rNywsHeWnAk/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 48,
    title: "Meta front-end - 131. Pipes",
    link: "https://docs.google.com/document/d/1Objdvz6Ut9X0YmEbP0i4PjLYDt8tvlu-Y4lmKZiAGQQ/edit#heading=h.izud3d77rkgv",
    status: "completed",
    subject: "programming",
    tags: ["git"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 49,
    title: "Meta front-end - 132. Redirection",
    link: "https://docs.google.com/document/d/1dKuMpwIc2-9MfVtSzBs9J94kMEdHeIpslyt8QJtIV3s/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 50,
    title: "Meta front-end - 133. Grep",
    link: "https://docs.google.com/document/d/1Y_Dp6qSVf64ReQMJd6uY5I9O0SoYvyfDVcZzevdvR4Q/edit#heading=h.tabkgrul3vok",
    status: "completed",
    subject: "programming",
    tags: ["git"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 51,
    title: "Meta front-end - 135. Connecting to GitHub via SSH",
    link: "https://docs.google.com/document/d/1MMjoYTZAgjJg6He4DVguAUb-luPkvc6sYSddw8iZbUg/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 52,
    title: "Meta front-end - 136. Creating and cloning a repository",
    link: "https://docs.google.com/document/d/1_jztHTUD3iJ8VwUeaMm8l9jblyZAyN70HWxImUAwp6A/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 53,
    title: "Meta front-end - 137. How Git works",
    link: "https://docs.google.com/document/d/1eNcD5qOhftX7bmUwSod87M2gihDo0DXBBmGFgFCXXL8/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 54,
    title: "Meta front-end - 138. Add and commit",
    link: "https://docs.google.com/document/d/1gaPT-sUWZh93rmYZI5GC7pgrfx8ccXHqIEKoev_QRFc/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 55,
    title: "Meta front-end - 139. Branches",
    link: "https://docs.google.com/document/d/1udmkSK1orydqdSFFH0lOm_ZqgEF5_IT3NdZOEWu5sm8/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "15-04-2023",
    editDate: "",
    lastTimeRead: "15-04-2023",
  },
  {
    id: 56,
    title: "Meta front-end - 140. Remote vs. local",
    link: "https://docs.google.com/document/d/1iTF0e0bQtZEekWSEy_WcZjUahBzBy37txgYktOEoy6Q/edit",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "17-04-2023",
    editDate: "",
    lastTimeRead: "17-04-2023",
  },
  {
    id: 57,
    title: "Meta front-end - 141. Push and pull",
    link: "https://docs.google.com/document/d/19f0pdF8c67WvWSEEUVMrwiXib938C5GiiMMo-9_MSZg/edit",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "17-04-2023",
    editDate: "",
    lastTimeRead: "17-04-2023",
  },
  {
    id: 58,
    title: "Meta front-end - 143. Example workflow",
    link: "https://docs.google.com/document/d/19lYRui_Dhxbl82u5ypcrReVCZzfxwjGO2we82q8BVxw/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "17-04-2023",
    editDate: "",
    lastTimeRead: "17-04-2023",
  },
  {
    id: 59,
    title: "Meta front-end - 144. HEAD",
    link: "https://docs.google.com/document/d/1htJpuo_nbuQBDYY26niTGEH8a-QlQ7NP9uMZHAk_ucs/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "17-04-2023",
    editDate: "",
    lastTimeRead: "17-04-2023",
  },
  {
    id: 60,
    title: "Meta front-end - 145. Diff commands",
    link: "https://docs.google.com/document/d/1ErzDJm5ZFJ-VG0BTc61Va50c9lsJA4bWTrugATZ5VTI/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "17-04-2023",
    editDate: "",
    lastTimeRead: "17-04-2023",
  },
  {
    id: 61,
    title: "Meta front-end - 146. Blame",
    link: "https://docs.google.com/document/d/1oOVk9IKJOKquFeJ53NfJGpLmUw6-3IDtLvKJBNZ72JM/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "17-04-2023",
    editDate: "",
    lastTimeRead: "17-04-2023",
  },
  {
    id: 62,
    title: "Meta front-end - 147. Forking",
    link: "https://docs.google.com/document/d/1PcIX9nBBx-Byhg9tUIvbshxVqDSV42CUuQ8gUyV7RfI/edit#",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "17-04-2023",
    editDate: "",
    lastTimeRead: "17-04-2023",
  },
  {
    id: 63,
    title: "Cơ bản về Vim cho người mới bắt đầu",
    link: "https://docs.google.com/document/d/16yy9GCpCTHE-_kD5pzXiHix7p3R5nRdOAZ7e6s4ZtIQ/edit#heading=h.1w8t4bx7zesy",
    status: "completed",
    subject: "programming",
    tags: ["git"],
    createDate: "17-04-2023",
    editDate: "",
    lastTimeRead: "17-04-2023",
  },
  {
    id: 64,
    title: "Meta front-end - 149. Semantic tags and why we need them",
    link: "https://docs.google.com/document/d/1XEVp5LLX3_VwfigI86-hEE5-DlG71H73TpEdLCiP6BA/edit",
    status: "completed",
    subject: "programming",
    tags: ["git", "git-hub"],
    createDate: "17-04-2023",
    editDate: "",
    lastTimeRead: "17-04-2023",
  },
  {
    id: 65,
    title: "Meta front-end - 150. Semantic HTML cheat sheet",
    link: "https://docs.google.com/document/d/1eGz5fiRicdGG8qFkupe20SHST3g0LZY1TyWl5K0a68E/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 66,
    title: "Meta front-end - 151. Metadata",
    link: "https://docs.google.com/document/d/1-M54eSyXxhaBtXzXovORNz9bp81AqbxKvgpQqdn_5Q0/edit#",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 67,
    title: "Meta front-end - 152. Metadata cheat sheet",
    link: "https://docs.google.com/document/d/1iTy9iwfz1002p5vLBcl0oNySPSm-P0UQcrgSOMZbBQQ/edit#",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 68,
    title: "Meta front-end - 153. Bare bones layout",
    link: "https://docs.google.com/document/d/1G2g6X2_jwGIcmuC71pO4N_nv37XODV_lvex8x8gSXmE/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 69,
    title: "Meta front-end - 154. Layout design",
    link: "https://docs.google.com/document/d/1z_x1aMH50PxmY5x1Uazt0V6sGFnMHSe9s5-0gCX9A3o/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 70,
    title: "Meta front-end - 155. UX with meta tags",
    link: "https://docs.google.com/document/d/10e__59-OcGC5Nk8ekMTH7puDC7HfYBAMdgRFvPZEXGc/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 71,
    title: "Meta front-end - 156. Social media cards",
    link: "https://docs.google.com/document/d/1qYQfqQR4nVpE8TmguOjiw6I8XC0LrXDIoS0K3aK-Xj8/edit#",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },

  {
    id: 72,
    title: "Meta front-end - 157. Setting up a social media card",
    link: "https://docs.google.com/document/d/1zQc39bMvXuYRZ0p0i7X8lDbU3VnVEKSGaobsGjmTVMQ/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 73,
    title: "Meta front-end - 159. Input types ",
    link: "https://docs.google.com/document/d/1QESkp6GmFloRZdlys3qR7YMzQNrfFxgDcDNIN75Si3g/edit#heading=h.en4cgzqoqoeu",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 74,
    title: "Meta front-end - 160. Creating a form",
    link: "https://docs.google.com/document/d/1JU7hZJBZEl8O6YPm9V6bx4Gb4zch7Rvg-pkVUZqXIg8/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 75,
    title: "Meta front-end - 33. Bootstrap",
    link: "https://docs.google.com/document/d/1fAqiMCFBHBLthzu7ROyNuPYe_LveSFeZjaUomyAfQK4/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML", "CSS", "bootstrap"],
    createDate: "18-04-2023",
    editDate: "",
    lastTimeRead: "18-04-2023",
  },
  {
    id: 76,
    title:
      "Meta front-end - The World for Sale - P11 - Dollar dầu mỏ và chính phủ tham nhũng",
    link: "https://docs.google.com/document/d/1DSaor25RKygKbcjs90Q-ons963Gyk9eMSXdXYohuA3Q/edit",
    status: "completed",
    subject: "economic",
    tags: ["book"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 77,
    title: "Meta front-end - 161. Making the most of client-side validation",
    link: "https://docs.google.com/document/d/1SS4fCFqcmbeDNtcFuFbjUwp9qFeksUlA6AHNJXVrjUI/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 78,
    title: "Meta front-end - 162. Radio buttons",
    link: "https://docs.google.com/document/d/1JxtuMDthMebAA_91Y-janZfgyVh-E_uDCpQQ4aDDlvc/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 79,
    title: "Meta front-end - 163. Cheat sheet: Interactive form elements",
    link: "https://docs.google.com/document/d/1S9h1Hz4lA9DIhxhub0h6aHK3mtG8UZ9hjycywGAyGjg/edit#",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 80,
    title: "Meta front-end - 164. Using interactive form elements",
    link: "https://docs.google.com/document/d/1mU4s46N_PFQF2xOIWzaW0w16AenWLzPiBxYmlqk807w/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 81,
    title: "Meta front-end - 165. Form submission",
    link: "https://docs.google.com/document/d/1suhitgBxVgIWKcv23MWPxN8LT5oRvwh5qW3yMJR_InE/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 82,
    title: "Meta front-end - 166. Submit",
    link: "https://docs.google.com/document/d/1E-1j5BIpreJe-RlF-nrtmyYc7PVy1vMsxCvrf-pGhDk/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 83,
    title: "Meta front-end - 167. Browser differences",
    link: "https://docs.google.com/document/d/18WlUudiA5LNaw_5JJ3JHQQ2K0jDG5P6ok2cA4B9Ye5Y/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 84,
    title: "Meta front-end - 168. Glossary: HTML form elements",
    link: "https://docs.google.com/document/d/1Y2MkhutldxxgqYc1ecwxXI6sujjT948r7C1_2QPuhJg/edit",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 85,
    title: "Credit Suisse: Văn hóa làm liều và tư bản thân hữu",
    link: "https://docs.google.com/document/d/1cvb7eWl73GWakdoR_0IHbI2lMERwRvUbCuzR2MyUgOg/edit",
    status: "completed",
    subject: "economic",
    tags: ["finance", "ubs", "risk", "management", "credit-suisse"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 86,
    title: "The Goldlist method: Learning vocabulary by writing it down",
    link: "https://docs.google.com/document/d/1KWeHyX91Ul_s22jei7rkf3L_otrb6sdhUtQOTjR17mQ/edit#",
    status: "completed",
    subject: "study-method",
    tags: ["study-method"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 8,
    title: "Meta front-end - ",
    link: "",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
  {
    id: 8,
    title: "Meta front-end - ",
    link: "",
    status: "completed",
    subject: "programming",
    tags: ["front-end", "HTML"],
    createDate: "19-04-2023",
    editDate: "",
    lastTimeRead: "19-04-2023",
  },
];

export { articlesData };
