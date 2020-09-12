import town from "../const/town.js"
export default {
  SPRING: [
    {
      "Fish": "ปลาชาร์ใหญ่",
      "Location": ["วันมีเมฆ " + town.WATER_FALL],
      "Note": "มันเป็นเพียงถ่านที่มีขนาดใหญ่ขึ้นตามกาลเวลา มันอายุเท่าไหร่กันนะ? (31,9 ซม. ~ 63,4 ซม.)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Largechar.png")
    },
    {
      "Fish": "ปลาแซลม่อนเชอร์รี่",
      "Location": [town.FARM, town.WATER_FALL, town.RIVER],
      "Note": "ใช้เวลาทั้งชีวิตในแม่น้ํา รสชาติเหมือนเชอร์รี่ไหม? (20,8cm ~43,2cm)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Cherrysalmon.png")
    },
    {
      "Fish": "ปลาโดะโจ",
      "Location": [town.FARM, town.WATER_FALL, town.RIVER],
      "Note": "เจ้าตัวนี้ชอบโคลน หนวดมันน่ารักมาก!",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Pondloach.png")
    },
    {
      "Fish": "ปลาวัวจมูกยาว",
      "Location": [town.BEACH, town.CAPE],
      "Note": "มันใช้เวลาทุกวันทําหน้าโง่ที่ (23,8cm ~39,2cm)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Tsfilefish.png")
    },
    {
      "Fish": "ปลาหมึกกล้วย",
      "Location": [town.BEACH, town.CAPE],
      "Note": "อย่าเพิ่งปลาหมึก! ไปเอาคราเคนมา! (14,3cm ~32,2cm)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Squid.png")
    },
    {
      "Fish": "ปลาดุก",
      "Location": ["เวลากลางคืน " + town.FARM, town.RIVER],
      "Note": "มหาศาลจากการกินมากเกินไป หนวดของมันสวยงามมาก",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Catfish.png")
    },
    {
      "Fish": "ปลากระพงแดง",
      "Location": ["เหยื่อตกปลาอย่างดี " + town.BEACH, town.CAPE],
      "Note": "ขอบคุณพระเจ้าที่ไม่ทำให้สายคุณขาด! คุณจะเห็นสีแดง!",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/RedSnapper.jpg")
    }],
  SUMMER: [
    {
      "Fish": "ปลาปิรันย่า",
      "Location": ["วันที่มีพายุ "+town.LAKE],
      "Note": "ไอ้นี่มันจะกัดใครก็ได้ บางทีคุณอาจเรียนรู้สิ่งหนึ่งหรือสองอย่างก็ได้",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Piranha.jpg")
    },
    {
      "Fish": "ปลาซิว",
      "Location": [town.FARM, town.RIVER],
      "Note": "เรามองผ่านคุณ! (1,4cm ~4,1cm)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Oryzias.png")
    },
    {
      "Fish": "เต่า",
      "Location": ["บ่อ "+town.FARM],
      "Note": "กลัวและซ่อนตัวอยู่ในเปลือกของมันเสมอ แต่ก็ยังสามารถกัดได้",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Softturtle.jpg")
    },
    {
      "Fish": "ปลาซาดีน",
      "Location": [town.BEACH, town.CAPE],
      "Note": "ปลาอพยพที่เดินทางไปด้วยกัน วิธีการกินที่แตกต่างกัน",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Sardine.png")
    },
    {
      "Fish": "ปลาวะคะซะงิ",
      "Location": [town.BEACH, town.CAPE],
      "Note": "ปลาชื่อแปลก มีชื่อเสียงในเรื่องเนื้อขาวอร่อย (9,9cm ~25,4cm)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Smelt.png")
    },
    {
      "Fish": "ปลาช่อน",
      "Location": [town.WATER_FALL],
      "Note": "มีฟันคมและหน้าโป๊กเกอร์ที่ดีที่สุดในเมือง",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Snakehead.png")
    },
    {
      "Fish": "ปลาไหล",
      "Location": [town.RIVER, town.WATER_FALL],
      "Note": "ลื่นมากเลยนะ โชคดีมากเลยถ้าจับด้วยมือเปล่า",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Eel.jpg")
    },
    {
      "Fish": "ปลาฉลาม",
      "Location": ["วันที่มีพายุ " +town.BEACH, town.CAPE],
      "Note": "นักล่าของมหาสมุทร ฟันของมันมีความคมและน่ากลัว",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Shark.png")
    },
    {
      "Fish": "ปลามาร์ลิน",
      "Location": ["6AM~12PM, อากาศดี "+ town.BEACH, town.CAPE],
      "Note": "ปลาที่ซีฟี่ชอบมาก พระเอกของมหาสมุทรนี้มีปากเป็นดาบ จับยากมาก",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Marlin.png")
    },
    {
      "Fish": "เอ็มเบ็งกะ",
      "Location": ["เหยื่อตกปลาชั้นดี "+ town.ROLIN_FOREST, town.LAKE],
      "Note": "ตํานาน สามารถเติบโตได้เท่ากับคน สิ่งนี้เป็นสัตว์ประหลาด (110,2cm ~218,4cm)",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Mbenga.png")
    }],
  AUTUMN: [
    {
      "Fish": "ปลาอายุ",
      "Location": [town.FARM, town.RIVER, town.WATER_FALL],
      "Note": "ปลาแม่น้ำสุดคลาสสิก เดี๋ยวก่อนมันไม่ได้ทำจากขนมเหรอ? ฉันต้องการเงินคืน!",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Sweetfish.png")
    },
    {
      "Fish": "ปลาแมกเคอเรล",
      "Location": [town.BEACH, town.CAPE],
      "Note": "ไม่มีอะไรสามารถเปรียบเทียบกับด้านหลังสีน้ำเงินที่สะท้อนแสงได้ดีของมัน",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Mackerel.png")
    },
    {
      "Fish": "ปลาแซลมอน",
      "Location": [town.FARM, town.WATER_FALL, town.RIVER],
      "Note": "มันเปลี่ยนบ้านตามวัย หวังเป็นอย่างยิ่งว่าจะได้พบกับท่าเทียบเรือที่ดี",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Salmon.jpg")
    },
    {
      "Fish": "ปลาเรนโบว์เทราต์",
      "Location": [town.WATER_FALL, town.RIVER],
      "Note": "อาศัยอยู่ในน้ำไหลเย็น โดยปกติจะเอาไปผัดหรือทอด",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Rainbowtrout.png")
    },
    {
      "Fish": "ปลาตะพัด",
      "Location": [town.ROLIN_FOREST],
      "Note": "ฟอสซิลที่มีชีวิตซึ่งมีชีวิตอยู่เมื่อนานมาแล้ว มัถูกพบแล้ว",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Arowana.png")
    },
    {
      "Fish": "ปลาโอแถบ",
      "Location": [town.BEACH, town.CAPE],
      "Note": "ตัวสีเงินแวววาวเท่มาก! ดูเหมือนดาวกำลังตกเลยนะ!",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Arcticbonito.jpg")
    },
    {
      "Fish": "ปลาดาบเงินใหญ่",
      "Location": [town.BEACH, town.CAPE],
      "Note": "มีชื่อเพราะดูเหมือนเข็มขัด (89,4 ซม. ~ 152,4 ซม.)",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Beltfish.jpg")
    },
    {
      "Fish": "ปลาช่อนอเมซอน",
      "Location": ["เหยื่อตกปลาชั้นดี "+town.WATER_FALL,"กลางคืนที่บ่อ " +town.FARM, town.RIVER],
      "Note": "ปลาโบราณ มีหน้าตาน่ารักแม้จะเกือบเป็นตำนาน",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Pirarucu.jpg")
    }
  ],
  WINTER: [
    {
      "Fish": "นางฟ้าทะเล",
      "Location": ["วันหิมะตก "+ town.BEACH, town.CAPE],
      "Note": "หรือที่เรียกว่าเทพเจ้าแห่งท้องทะเล ปีกลึกลับและร่างกายที่ชัดเจน",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Clione.jpg")
    },
    {
      "Fish": "ปู",
      "Location": ["วันหิมะตก " +town.BEACH, town.CAPE],
      "Note": "เปลือกหนาซ่อนรสชาติของฤดูหนาว แต่เอาก้ามออกดีกว่านะ",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Tannercrab.jpg")
    },
    {
      "Fish": "ปลาสร้อย",
      "Location": [town.FARM],
      "Note": "ค่าโดยสารตกปลาในฤดูหนาวทั่วไป ผ่าน้ำแข็งแล้วไปทำงาน!",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Pondsmelt.png")
    },
    {
      "Fish": "กุ้ง",
      "Location": [town.BEACH, town.CAPE],
      "Note": "ด้านหลังเปลือกแข็งนั้นภายในชุ่มฉ่ำ",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Shrimp.png")
    },
    {
      "Fish": "ปลาปักเป้า",
      "Location": [town.BEACH, town.CAPE],
      "Note": "มีพิษร้ายแรงในร่างกาย แต่หน้าดูโง่สำหรับนักฆ่าเช่นนี้ (34 ซม. ~ 68,3 ซม.)",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Puffer.png")
    },
    {
      "Fish": "ปลากบ",
      "Location": ["แม่น้ำในเหมืองชั้น B10F "+ town.BEACH, town.CAPE],
      "Note": "ใบหน้าโดดเดี่ยวคือความกลัวที่แท้จริง มันต้องน่าเกลียดขนาดนั้นเลยเหรอ? (55,5cm ~ 81,4cm)",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Monkfish.png")
    },
    {
      "Fish": "ปลาสำลี",
      "Location": ["วันหิมะตก "+town.BEACH, town.CAPE],
      "Note": "เปลี่ยนชื่อตามอายุ ในการติดตามอย่างรวดเร็วเพื่อเป็นดารา!",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Amberjack.jpg")
    },
    {
      "Fish": "ทูน่า",
      "Location": ["วันหิมะตกหนัก "+ town.CAPE],
      "Note": "แชมป์ว่ายน้ำตลอดกาล มันเห็นอะไรในการเดินทางของมัน?",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Tuna.jpg")
    },
    {
      "Fish": "ปลาออร์ยักษ์",
      "Location": ["เหยื่อตกปลาชั้นดี "+town.BEACH, town.CAPE],
      "Note": "ตำนาน ดูเหมือนหลุดออกมาจากเทพนิยาย หวีมันอยู่ไกลออกไป (327 ซม. ~ 1145,1 ซม.)",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/BigOrfish.jpg")
    }
  ],
  ALL: [
    {
      "Fish": "กุ้งเครย์ฟิช",
      "Location": [town.Farm, town.WATER_FALL, town.RIVER, town.ROLIN_FOREST],
      "Note": "ทหารแดงคนนี้มีกรรไกรสองแขน สนิปสนิป! (6,8 ซม. ~ 17,2 ซม.)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Crayfish.png")
    },
    {
      "Fish": "ปลาคาร์บ",
      "Location": [town.Farm, town.WATER_FALL, town.RIVER],
      "Note": "ถือว่าเป็นปลากะทะที่ดีที่สุดในโปแลนด์ เสิร์ฟพร้อมครีมเปรี้ยว (25,9 ซม. ~ 40,6 ซม.)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Cruciancarp.png")
    },
    {
      "Fish": "ปลาทูแขก",
      "Location": [town.BEACH, town.CAPE],
      "Note": "เพื่อนซี้ของคนรักอาหารทะเล ไม่ว่าคุณจะปรุงอย่างไรความอร่อยรอคุณอยู่ (14,7 ซม. ~ 82,3 ซม.)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Horsemackerel.png")
    },
    {
      "Fish": "ปลาไน",
      "Location": [town.Farm, town.WATER_FALL, town.RIVER],
      "Note": "เพื่อนที่มีชีวิตชีวาเหล่านี้มีอยู่ทั่วไป โชคดีที่จับได้หลังจากที่พวกมันโตแล้ว (43,2 ซม. ~ 82,3 ซม.)",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Carp.png")
    },
    {
      "Fish": "ปลาหมีกยักษ์",
      "Location": [town.BEACH, town.CAPE],
      "Note": "แปดขาและตัวดูดมากมาย หนีไม่พ้นเจ้านี้! (45,7 ซม. ~ 218,4 ซม.)",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Octopus.png")
    },
    {
      "Fish": "ปลาทอง",
      "Location": [town.Farm, town.WATER_FALL, town.RIVER],
      "Note": "ครั้งหนึ่งคนรวยเท่านั้นที่สามารถเป็นเจ้าของสิ่งเหล่านี้ได้ เห็นได้ชัดว่าทำไม",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Goldfish.png")
    },
    {
      "Fish": "ปลากระพง",
      "Location": [town.BEACH, town.CAPE],
      "Note": "ตอนนี้นี่คือสิ่งที่นักตกปลารอคอย ม้วนเข้าและเตรียมพร้อมที่จะฉลอง (65,4 ซม. ~ 100,7 ซม.)",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Seabass.png")
    },
    {
      "Fish": "ปลาตาเดียว",
      "Location": [town.BEACH, town.CAPE],
      "Note": "มองจากด้านล่างเสมอ ตาของมันเติบโตไปทางด้านเดียวกับลำตัวแบน",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Flounder.png")
    },
    {
      "Fish": "ฉลามครุย",
      "Location": ["แม่น้ำในถ้ำชั้น B10F"],
      "Note": "ฟอสซิลที่มีชีวิตในตำนาน เพื่อนของฉลาม. น่ากลัวถ้าเจอในส่วนลึกด้านล่าง",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Frilledshark.png")
    }
  ],
  LANDROD:[
    {
      "Fish": "ปลาซีลาแคนด์",
      "Location": ["เหยื่อตกปลาชั้นดี " +town.BEACH, town.CAPE],
      "Note": "ปลาโบราณนี้เหมือนฟอสซิลที่มีชีวิต",
      "Shadow": "ใหญ่",
      "img":  require("../assets/Fishing/Coelacanth-Dor.jpg")
    },
    {
      "Fish": "หอยนอติลุส",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "หอยโบราณนี้เปรียบเสมือนฟอสซิลที่มีชีวิต",
      "Shadow": "กลาง",
      "img":  require("../assets/Fishing/Nautilus-Dor.jpg")
    },
    {
      "Fish": "แมงดาทะเล",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "เราเรียกฟอสซิลที่มีชีวิตนี้ว่าปู แต่จริงๆแล้วมันเหมือนแมงมุมมากกว่า!",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Horseshoe_Crab-Dor.jpg")
    },
    {
      "Fish": "ฉลามก็อบลิน",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ฉลามหน้าตาแปลก คุณเคยเห็นวิธีที่มันอ้าปากกินไหม? (201,1 ซม. ~ 385,1 ซม.)",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Goblin_Shark-Dor.jpg")
    },
    {
      "Fish": "แฮคฟิช",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ชาวทะเลที่ลื่นไหล อย่าปล่อยให้หน้าตาหลอกลวงว่าน่าจะอร่อยมาก! (36,3 ซม. ~ 89,2 ซม.)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Hagfish-Dor.jpg")
    },
    {
      "Fish": "Anomalocaris",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "สัตว์ทะเลตั้งแต่สมัยโบราณ เราไม่ค่อยรู้อะไรมากเกี่ยวกับเพื่อนกุ้งเหล่านี้!",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Anomalocaris-Dor.jpg")
    },
    {
      "Fish": "Hallucigenia",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "สิ่งมีชีวิตโบราณที่มีรูปร่างแปลกประหลาด บอกได้ไหมว่าหัวไหน ... ?",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Hallucigenia-Dor.jpg")
    },
    {
      "Fish": "Dunkleosteus",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ปลาโบราณขนาดใหญ่ทรงพลังที่สวมเกราะกระดูกและกัดได้",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Dunkleosteus-Dor.jpg")
    },
    {
      "Fish": "Opabinia",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "สิ่งมีชีวิตโบราณหน้าตาประหลาดที่มีตาห้าตาและกรงเล็บเดียว",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Opabinia-Dor.jpg")
    },
    {
      "Fish": "ไอโซพอตยักษ์",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ปล้นสะดมทะเล พวกมันตัวโต แต่กินไม่เยอะจริงๆ",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Bathynomus-Dor.jpg")
    },
    {
      "Fish": "ปลาหมึกดัมโบ้",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ปลาหมึกทะเลลึกลึกลับรูปร่างคล้ายร่มชูชีพตัวน้อย",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Umbrella_Octo-Dor.jpg")
    },
    {
      "Fish": "ปลาหัวใส",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ดวงตาภายในหัวใสช่วยให้มองเห็นปลาว่ายอยู่ด้านบน",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Barreleye-Dor.jpg")
    },
    {
      "Fish": "ปลาพระอาทิตย์",
      "Location": [town.BEACH, town.CAPE],
      "Note": "ปลาตัวใหญ่แบนหน้าตาตลก ยังมีอะไรให้เรียนรู้อีกมากมาย!",
      "Shadow": "ใหญ่",
      "img": require("../assets/Fishing/Mola-Dor.jpg")
    },
    {
      "Fish": "Fanfish",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ดูปลานั่นสิ! แม้ว่า มันดูน่าเบื่อเมื่อพวกมันกำลังเซ็ง ..",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Fanfish-Dor.jpg")
    },
    {
      "Fish": "Careproctus",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ลูกปลาสีชมพูน่ารัก ค่อนข้างเป็นสิ่งมีชีวิตที่หายาก",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Careproctus-Dor.jpg")
    },
    {
      "Fish": "ปลาหอยทาก",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ปลาที่อาศัยอยู่ในส่วนลึก ดูเหมือนลูกอ๊อดโปร่งแสง! (13,5 ซม. ~ 24,3 ซม.)",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Snailfish-Dor.jpg")
    },
    {
      "Fish": "ฉลามพ็อกเกต",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ฉลามน้อยแปลก ๆ ที่มีกระเป๋าของตัวเอง ไม่มีใครรู้ว่ามีไว้เพื่ออะไร ... (11,2cm ~ 18,4cm)",
      "Shadow": "กลาง",
      "img": require("../assets/Fishing/Pocket_Shark-Dor.jpg")
    },
    {
      "Fish": "ปลิงทะเล",
      "Location": ["กัดในทีเดียว เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "สัตว์ทะเลตัวเล็ก ๆ บางครั้งก็นอนบนพื้นทรายในฤดูร้อน",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Sea_Cucumber-Dor.jpg")
    },
    {
      "Fish": "ทากทะเล",
      "Location": ["กัดในทีเดียว เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "หอยที่ไม่มีเปลือกหอยเหล่านี้มีสีสันมากมายให้กับทะเล!",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Sea_Slug-Dor.jpg")
    },
    {
      "Fish": "ม้าน้ำ",
      "Location": ["เบ็ดตกปลาที่ไหนก็ได้"],
      "Note": "ม้าตัวน้อยลอยอยู่ในทะเล แม้จะดูยังไงก็เป็นปลาจริงๆ!",
      "Shadow": "เล็ก",
      "img": require("../assets/Fishing/Seahorse-Dor.jpg")
    }
  ]
}