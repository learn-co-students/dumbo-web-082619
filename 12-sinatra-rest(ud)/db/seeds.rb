Student.destroy_all

students = [
  { name: "Aibek Ozhorov", photo: "https://avatars.slack-edge.com/2019-08-27/733447427873_d030562a6cf3b4c60877_192.png" },
  { name: "Alex Mendes", photo: "https://avatars.slack-edge.com/2019-08-27/739891231536_61c272a8b6a942a290ed_192.png" },
  { name: "Belle Poopongpanit", photo: "https://avatars.slack-edge.com/2019-08-26/741194637990_52531a78869d41251cfe_192.png" },
  { name: "Benny Louie", photo: "https://avatars.slack-edge.com/2019-08-25/726240430210_f4c675ed507bf801c56c_192.png" },
  { name: "Brett Saxon", photo: "https://avatars.slack-edge.com/2019-09-05/744422874049_e407833cd6dbd2b13001_192.png" },
  { name: "Daniel Romans", photo: "https://avatars.slack-edge.com/2019-08-26/739130793472_62c731304db05c6673a7_192.jpg" },
  { name: "Franky Liu", photo: "https://avatars.slack-edge.com/2019-08-28/740493683124_cd2d1dcdd016e80f129c_192.jpg" },
  { name: "Fredrick Barrett", photo: "https://avatars.slack-edge.com/2019-08-28/740739121140_ef6186481c605a54684a_192.png" },
  { name: "Gabriel Kutik", photo: "https://avatars.slack-edge.com/2019-08-27/742214677767_efa2c928a2c38a8678a4_192.jpg" },
  { name: "James Gibbel", photo: "https://avatars.slack-edge.com/2019-08-27/739766458197_0b3d5db36679ccc9abe8_192.jpg" },
  { name: "John Speck", photo: "https://avatars.slack-edge.com/2019-09-07/739510961186_00ca2325c57958afb7f4_192.jpg" },
  { name: "Karina Macancela", photo: "https://ca.slack-edge.com/T02MD9XTF-UMGBYPXJM-g8d2bda4366e-512" },
  { name: "Mark DeNardo", photo: "https://avatars.slack-edge.com/2019-08-26/738602862772_c9ac2552824611eab015_192.jpg" },
  { name: "Mykle Jones", photo: "https://avatars.slack-edge.com/2019-08-26/727007470002_f7a85e90818cc74f9ff4_192.jpg" },
  { name: "Nicholas Montesino", photo: "https://ca.slack-edge.com/T02MD9XTF-UMB9XUFQS-1522a655ffa5-512" },
  { name: "Tawhid Ali", photo: "https://avatars.slack-edge.com/2019-08-27/728141461459_f93a6852048af54e3ca5_192.jpg" },
  { name: "Taylor Watson", photo: "https://ca.slack-edge.com/T02MD9XTF-UMNPADGTX-gde9afbeaf14-512" },
  { name: "Theresa Cyrus", photo: "https://avatars.slack-edge.com/2019-08-27/728948631346_d9bb95d599f4b58f2290_192.jpg" },
  { name: "Viraj Ransing", photo: "https://avatars.slack-edge.com/2019-08-27/741781095143_afbe01e876a371994b4f_192.jpg" },
  { name: "YukiYao Yao", photo: "https://avatars.slack-edge.com/2019-08-24/736759308836_bf0f07a74453104db0cd_192.png" }
]

students.each do |student_info|
  Student.create(
    name: student_info[:name],
    photo_url: student_info[:photo],
    slogan: Faker::Quote.famous_last_words,
    age: rand(18)
  )
end
