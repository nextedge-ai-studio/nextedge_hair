import { platformDataSchema, type Region, type Salon } from "@nextedge/schemas";

const rawData = {
  regions: [
    {
      id: "taipei-city",
      name: "台北市",
      description: "高端剪染、韓系造型與俐落都會風格最集中的區域。",
      heroImage:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      featuredDistricts: ["大安區", "信義區", "松山區"],
      salonCount: 18,
    },
    {
      id: "new-taipei",
      name: "新北市",
      description: "住宅與商圈交錯，適合日常維護與高 CP 值燙染預約。",
      heroImage:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
      featuredDistricts: ["板橋區", "永和區", "新莊區"],
      salonCount: 12,
    },
    {
      id: "taichung",
      name: "台中市",
      description: "精品沙龍與個人工作室並存，適合做風格轉換與作品導向搜尋。",
      heroImage:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
      featuredDistricts: ["西屯區", "西區", "南屯區"],
      salonCount: 9,
    },
    {
      id: "tainan",
      name: "台南市",
      description: "慢節奏預約文化與質感工作室聚集，適合做長線造型維護。",
      heroImage:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      featuredDistricts: ["東區", "中西區", "安平區"],
      salonCount: 7,
    },
  ],
  salons: [
    {
      id: "atelier-noir",
      slug: "atelier-noir",
      name: "黑曜髮藝所",
      regionId: "taipei-city",
      district: "大安區",
      address: "台北市大安區忠孝東路四段 82 號",
      coverImage:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80",
      vibe: "都會霧感染髮沙龍",
      rating: 4.9,
      reviewCount: 184,
      description:
        "以低彩霧感染與輪廓剪裁見長，空間設計偏精品選品店語彙，適合做完整風格轉換。",
      tags: ["韓系層次", "霧感染", "高級感剪裁"],
      stylists: [
        {
          id: "mei-lin",
          name: "Mei Lin",
          title: "染髮主理人",
          specialty: ["奶茶線條染", "修容挑染", "低傷害漂髮"],
          bio: "專注高級霧感色與細節修容染，擅長把亞洲髮質做出乾淨的層次透感。",
          portrait:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "今天 15:30",
          bookingSlots: [
            { id: "ml-1", label: "今天 15:30", available: true },
            { id: "ml-2", label: "今天 18:00", available: true },
            { id: "ml-3", label: "明天 11:00", available: false },
            { id: "ml-4", label: "明天 14:30", available: true },
          ],
          portfolio: [
            {
              id: "ml-p1",
              title: "柔霧米棕短鮑伯",
              image:
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
              tag: "霧米金",
              caption: "低漂兩次後做冷米色校正，保留根部陰影讓 bob 線條更乾淨。",
            },
            {
              id: "ml-p2",
              title: "修容光澤捲",
              image:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
              tag: "修容線條",
              caption: "瀏海與顴骨外圈做提亮，搭配柔霧大彎，鏡頭下輪廓會更立體。",
            },
            {
              id: "ml-p3",
              title: "灰霧長層次",
              image:
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=80",
              tag: "灰霧色",
              caption: "用低彩霧灰壓掉橘感，長層次維持空氣感但不會顯得毛躁。",
            },
          ],
          pricing: [
            { name: "剪髮＋造型", durationMinutes: 75, priceTwd: 1800 },
            { name: "質感染髮", durationMinutes: 150, priceTwd: 4200 },
            { name: "漂髮＋校色", durationMinutes: 240, priceTwd: 6800 },
          ],
        },
        {
          id: "aaron-chen",
          name: "Aaron Chen",
          title: "輪廓剪裁師",
          specialty: ["男士短裁", "自然捲度燙", "法式短鮑伯"],
          bio: "擅長把日常好整理與鏡頭感平衡在一起，剪裁乾淨俐落。",
          portrait:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "明天 13:00",
          bookingSlots: [
            { id: "ac-1", label: "明天 13:00", available: true },
            { id: "ac-2", label: "明天 16:00", available: true },
            { id: "ac-3", label: "週六 10:00", available: true },
            { id: "ac-4", label: "週六 19:00", available: false },
          ],
          portfolio: [
            {
              id: "ac-p1",
              title: "俐落短裁",
              image:
                "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
              tag: "男士剪髮",
              caption: "兩側推貼但頂部保留厚度，整理只需要啞光土就能定型。",
            },
            {
              id: "ac-p2",
              title: "法式短鮑伯線條",
              image:
                "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=80",
              tag: "精準剪裁",
              caption: "下顎線以上的法式短 bob，重點在髮尾收束與瀏海破口比例。",
            },
            {
              id: "ac-p3",
              title: "紋理重整燙",
              image:
                "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1000&q=80",
              tag: "自然捲度",
              caption: "針對扁塌髮流做局部捲度重建，早上吹整時間可以縮到十分鐘內。",
            },
          ],
          pricing: [
            { name: "精準剪髮", durationMinutes: 60, priceTwd: 1600 },
            { name: "自然感燙髮", durationMinutes: 150, priceTwd: 3600 },
            { name: "剪髮＋紋理重整", durationMinutes: 90, priceTwd: 2200 },
          ],
        },
        {
          id: "nina-yeh",
          name: "Nina Yeh",
          title: "頭皮修護設計師",
          specialty: ["頭皮淨化", "光澤護理", "毛躁控制"],
          bio: "以頭皮檢測與髮況修護切入，適合長期維護與受損髮重整。",
          portrait:
            "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "週五 12:00",
          bookingSlots: [
            { id: "ny-1", label: "週五 12:00", available: true },
            { id: "ny-2", label: "週五 15:30", available: true },
            { id: "ny-3", label: "週六 13:00", available: false },
            { id: "ny-4", label: "週日 16:30", available: true },
          ],
          portfolio: [
            {
              id: "ny-p1",
              title: "鏡面修護髮感",
              image:
                "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
              tag: "深層修護",
              caption: "經過三次護理把漂後乾澀感壓下來，整體反光會更乾淨。",
            },
            {
              id: "ny-p2",
              title: "柔蓬髮根支撐",
              image:
                "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1000&q=80",
              tag: "頭皮養護",
              caption: "先做頭皮淨化再做髮根支撐，蓬鬆度提升但不會有硬感。",
            },
          ],
          pricing: [
            { name: "頭皮檢測＋淨化", durationMinutes: 75, priceTwd: 2000 },
            { name: "深層光澤修護", durationMinutes: 90, priceTwd: 2600 },
            { name: "毛躁重整護理", durationMinutes: 120, priceTwd: 3400 },
          ],
        },
      ],
    },
    {
      id: "golden-frame",
      slug: "golden-frame",
      name: "金框造型會所",
      regionId: "taipei-city",
      district: "信義區",
      address: "台北市信義區松壽路 21 號 B1",
      coverImage:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=80",
      vibe: "光澤宴會造型沙龍",
      rating: 4.8,
      reviewCount: 132,
      description:
        "適合重要場合前整理，強調光澤感、柔順輪廓與快速高質感完成度。",
      tags: ["光澤吹整", "新娘造型", "正式場合"],
      stylists: [
        {
          id: "sora",
          name: "Sora Hsu",
          title: "宴會造型主理人",
          specialty: ["新娘髮型", "空氣感捲度", "鏡頭光澤感"],
          bio: "專做重要場合造型與長髮光澤整理，節奏穩定，作品完成度高。",
          portrait:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "今天 19:30",
          bookingSlots: [
            { id: "sh-1", label: "今天 19:30", available: true },
            { id: "sh-2", label: "明天 09:30", available: true },
            { id: "sh-3", label: "明天 17:00", available: false },
            { id: "sh-4", label: "週日 12:00", available: true },
          ],
          portfolio: [
            {
              id: "sh-p1",
              title: "珍珠感新娘捲",
              image:
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80",
              tag: "新娘造型",
              caption: "婚禮造型前先做髮面拋光，讓珍珠頭紗與捲度線條更乾淨。",
            },
            {
              id: "sh-p2",
              title: "光澤高馬尾",
              image:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
              tag: "宴會造型",
              caption: "高馬尾做頭頂蓬度支撐，適合晚宴與品牌活動拍攝。",
            },
            {
              id: "sh-p3",
              title: "緞帶低盤髮",
              image:
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
              tag: "正式髮型",
              caption: "低髻搭配細節緞帶收束，輪廓簡潔，適合禮服與露肩造型。",
            },
          ],
          pricing: [
            { name: "洗髮＋吹整", durationMinutes: 50, priceTwd: 1400 },
            { name: "宴會造型", durationMinutes: 90, priceTwd: 2600 },
            { name: "新娘試妝髮", durationMinutes: 120, priceTwd: 4200 },
          ],
        },
        {
          id: "claire-lo",
          name: "Claire Lo",
          title: "新娘造型顧問",
          specialty: ["試妝髮型", "頭紗配置", "柔和盤髮"],
          bio: "專做新娘試妝與正式儀式造型，重視頭紗、耳環與臉型平衡。",
          portrait:
            "https://images.unsplash.com/photo-1549351512-c5e12b11c2d6?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "明天 11:30",
          bookingSlots: [
            { id: "cl-1", label: "明天 11:30", available: true },
            { id: "cl-2", label: "明天 15:00", available: true },
            { id: "cl-3", label: "週六 09:00", available: true },
            { id: "cl-4", label: "週日 10:00", available: false },
          ],
          portfolio: [
            {
              id: "cl-p1",
              title: "輕紗平衡盤髮",
              image:
                "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
              tag: "新娘髮型",
              caption: "用耳側碎髮修飾顴骨，頭紗固定點不會壓扁後腦輪廓。",
            },
            {
              id: "cl-p2",
              title: "戶外證婚盤髮",
              image:
                "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
              tag: "盤髮",
              caption: "戶外婚禮重視持久度，收髮位置會避開風口與汗線。",
            },
          ],
          pricing: [
            { name: "新娘諮詢", durationMinutes: 60, priceTwd: 1800 },
            { name: "試妝盤髮", durationMinutes: 120, priceTwd: 3600 },
            { name: "儀式造型", durationMinutes: 150, priceTwd: 5200 },
          ],
        },
      ],
    },
    {
      id: "linen-cut-house",
      slug: "linen-cut-house",
      name: "亞麻剪裁室",
      regionId: "new-taipei",
      district: "板橋區",
      address: "新北市板橋區文化路 16 號",
      coverImage:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80",
      vibe: "安靜系日常設計室",
      rating: 4.7,
      reviewCount: 88,
      description:
        "擅長中長髮層次與自然捲度整理，價格帶清楚，適合固定回訪。",
      tags: ["層次剪", "自然燙", "日常整理"],
      stylists: [
        {
          id: "yuki",
          name: "Yuki Tseng",
          title: "剪燙設計師",
          specialty: ["長層次剪裁", "S 型燙", "髮根蓬度"],
          bio: "偏好自然線條與可持續整理的設計，風格柔和乾淨。",
          portrait:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "明天 10:30",
          bookingSlots: [
            { id: "yt-1", label: "明天 10:30", available: true },
            { id: "yt-2", label: "明天 14:00", available: true },
            { id: "yt-3", label: "週五 17:00", available: true },
            { id: "yt-4", label: "週六 11:30", available: false },
          ],
          portfolio: [
            {
              id: "yt-p1",
              title: "自然感 S 捲",
              image:
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80",
              tag: "燙髮",
              caption: "中段開始做 S 型捲度，適合不想每天上電棒的人。",
            },
            {
              id: "yt-p2",
              title: "輕盈層次感",
              image:
                "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1000&q=80",
              tag: "層次剪",
              caption: "髮尾留重量、上層做空氣感，吹乾後就能有輪廓。",
            },
            {
              id: "yt-p3",
              title: "日常髮根蓬度",
              image:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
              tag: "髮根支撐",
              caption: "髮根局部支撐搭配側分修飾，適合細軟塌髮。",
            },
          ],
          pricing: [
            { name: "設計剪髮", durationMinutes: 60, priceTwd: 1200 },
            { name: "空氣感燙髮", durationMinutes: 180, priceTwd: 3200 },
            { name: "髮根支撐", durationMinutes: 90, priceTwd: 2000 },
          ],
        },
        {
          id: "joel-lin",
          name: "Joel Lin",
          title: "男士質感理容師",
          specialty: ["乾淨漸層", "自然捲流向", "鬍型平衡"],
          bio: "偏向俐落男士剪裁，但會保留自然紋理，不走過度硬派風格。",
          portrait:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "今天 20:00",
          bookingSlots: [
            { id: "jl-1", label: "今天 20:00", available: true },
            { id: "jl-2", label: "明天 12:30", available: true },
            { id: "jl-3", label: "週五 19:30", available: false },
            { id: "jl-4", label: "週六 16:00", available: true },
          ],
          portfolio: [
            {
              id: "jl-p1",
              title: "乾淨漸層紋理",
              image:
                "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1000&q=80",
              tag: "漸層剪裁",
              caption: "兩側低漸層搭配上方自然流向，適合上班與週末都能用。",
            },
            {
              id: "jl-p2",
              title: "自然捲流向修整",
              image:
                "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1000&q=80",
              tag: "男士燙髮",
              caption: "用大捲度控制毛流亂翹，不會做成過於明顯的捲髮感。",
            },
          ],
          pricing: [
            { name: "男士理容剪髮", durationMinutes: 50, priceTwd: 1000 },
            { name: "漸層＋修鬍", durationMinutes: 70, priceTwd: 1500 },
            { name: "質感燙髮", durationMinutes: 140, priceTwd: 2800 },
          ],
        },
      ],
    },
    {
      id: "muse-canvas",
      slug: "muse-canvas",
      name: "繆思造型所",
      regionId: "taichung",
      district: "西區",
      address: "台中市西區公益路 55 號",
      coverImage:
        "https://images.unsplash.com/photo-1554519515-242161756769?auto=format&fit=crop&w=1400&q=80",
      vibe: "風格轉換影像沙龍",
      rating: 4.9,
      reviewCount: 96,
      description:
        "適合想做明確風格轉換的客人，從髮色、輪廓到妝感搭配都會一起考量。",
      tags: ["創意染髮", "形象設計", "拍攝整理"],
      stylists: [
        {
          id: "iris-wu",
          name: "Iris Wu",
          title: "風格形象設計師",
          specialty: ["時裝感髮色", "狼尾剪", "編輯感紋理"],
          bio: "作品導向很強，適合拍攝前整理或想一次把風格拉開的人。",
          portrait:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "明天 16:00",
          bookingSlots: [
            { id: "iw-1", label: "明天 16:00", available: true },
            { id: "iw-2", label: "週五 11:00", available: true },
            { id: "iw-3", label: "週六 14:00", available: true },
            { id: "iw-4", label: "週日 18:30", available: false },
          ],
          portfolio: [
            {
              id: "iw-p1",
              title: "編輯感狼尾線條",
              image:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
              tag: "狼尾剪",
              caption: "上層拉高、頸後留長，適合中性輪廓與強一點的穿搭。",
            },
            {
              id: "iw-p2",
              title: "霧玫銅髮色",
              image:
                "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1000&q=80",
              tag: "創意染髮",
              caption: "銅紅色基底加一點粉霧感，室內外光線都不會髒。",
            },
            {
              id: "iw-p3",
              title: "鏡頭感紋理整理",
              image:
                "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1000&q=80",
              tag: "拍攝前整理",
              caption: "用乾霧質地做髮流切面，平面拍攝時更能抓到層次。",
            },
          ],
          pricing: [
            { name: "形象諮詢剪髮", durationMinutes: 90, priceTwd: 2200 },
            { name: "創意染髮", durationMinutes: 240, priceTwd: 5600 },
            { name: "拍攝整理", durationMinutes: 120, priceTwd: 3200 },
          ],
        },
        {
          id: "derek-su",
          name: "Derek Su",
          title: "高明度漂染師",
          specialty: ["雙次漂髮", "冷灰銀色", "補救校色"],
          bio: "擅長高明度漂染與退色路徑規劃，會先把後續補色成本講清楚。",
          portrait:
            "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "週五 13:30",
          bookingSlots: [
            { id: "ds-1", label: "週五 13:30", available: true },
            { id: "ds-2", label: "週六 12:00", available: false },
            { id: "ds-3", label: "週日 11:00", available: true },
            { id: "ds-4", label: "週日 15:30", available: true },
          ],
          portfolio: [
            {
              id: "ds-p1",
              title: "乾淨冷灰銀",
              image:
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80",
              tag: "冷灰銀",
              caption: "先把底色提到乾淨黃，再做冷灰銀調，退色後也不易偏綠。",
            },
            {
              id: "ds-p2",
              title: "中性米色補救",
              image:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
              tag: "校色補救",
              caption: "修正前次染後的不均勻色塊，改成更耐看的中性米色。",
            },
          ],
          pricing: [
            { name: "漂髮諮詢", durationMinutes: 45, priceTwd: 800 },
            { name: "雙次漂髮＋校色", durationMinutes: 300, priceTwd: 7200 },
            { name: "補救校色", durationMinutes: 240, priceTwd: 6800 },
          ],
        },
      ],
    },
    {
      id: "harbor-silk",
      slug: "harbor-silk",
      name: "港絲髮務所",
      regionId: "tainan",
      district: "中西區",
      address: "台南市中西區民生路 108 號",
      coverImage:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
      vibe: "慢調修護髮務空間",
      rating: 4.8,
      reviewCount: 74,
      description:
        "以修護、光澤與日常容易整理為優先，適合不追求誇張變化但重視質感的人。",
      tags: ["光澤修護", "柔和剪裁", "台南精選"],
      stylists: [
        {
          id: "han-yu",
          name: "Han Yu",
          title: "修護設計師",
          specialty: ["光澤堆疊", "低彩棕色", "滑順吹整"],
          bio: "偏好低彩度、耐看與長期維護路線，重視頭髮摸起來的質感。",
          portrait:
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
          nextAvailable: "明天 09:00",
          bookingSlots: [
            { id: "hy-1", label: "明天 09:00", available: true },
            { id: "hy-2", label: "明天 13:30", available: true },
            { id: "hy-3", label: "週五 10:30", available: true },
            { id: "hy-4", label: "週六 15:00", available: false },
          ],
          portfolio: [
            {
              id: "hy-p1",
              title: "靜棕光澤感",
              image:
                "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
              tag: "光澤修護",
              caption: "用深棕基底做透明感校色，讓日常光線下看起來更柔和。",
            },
            {
              id: "hy-p2",
              title: "鎖骨長度柔線條",
              image:
                "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=80",
              tag: "中長髮",
              caption: "鎖骨長度搭配內彎與臉周修飾，屬於很耐看的日常型。",
            },
          ],
          pricing: [
            { name: "修護剪髮", durationMinutes: 70, priceTwd: 1400 },
            { name: "光澤染髮", durationMinutes: 150, priceTwd: 3600 },
            { name: "絲感修護", durationMinutes: 90, priceTwd: 2400 },
          ],
        },
      ],
    },
  ],
};

const parsed = platformDataSchema.parse(rawData);

export const platformData = parsed;
export const regions = parsed.regions;
export const salons = parsed.salons;

export function getRegionById(regionId: string): Region | undefined {
  return regions.find((region) => region.id === regionId);
}

export function getSalonsByRegion(regionId: string): Salon[] {
  return salons.filter((salon) => salon.regionId === regionId);
}

export function getSalonBySlug(slug: string): Salon | undefined {
  return salons.find((salon) => salon.slug === slug);
}
