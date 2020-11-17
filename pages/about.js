import Image from 'next/image'
import Layout from "../components/layout";

export default function Custom404() {
    return (
        <Layout>
            <p>If pictures are worth a thousand words. I'll let pictures tell you a little about me.</p>

            <p>
                <Image src="/images/about/DSCF8621.jpg" width="800" height="533"></Image>
                <center>Against the odds, baby Kian! - 2020</center>
            </p>

            <p>
                <Image src="/images/about/DSC07307.jpg" width="800" height="533"></Image>
                <center>At camp on the Olympic Peninsula Coast - 2019</center>
            </p>

            <p>
                <Image src="/images/about/DSCF5384.jpg" width="800" height="533"></Image>
                <center>Beautiful Navajo Sandstone at Angels Landing - 2019</center>
            </p>

            <p>
                <Image src="/images/about/DSCF9030.jpg" width="800" height="533"></Image>
                <center>Alone at Crater Lake in Oregon during a whiteout storm - 2018</center>
            </p>

            <p>
                <Image src="/images/about/DJI_0027.jpg" width="800" height="533"></Image>
                <center>Never-ending golden hour in Iceland - 2017</center>
            </p>

            <p>
                <Image src="/images/about/DSC03507.jpg" width="800" height="533"></Image>
                <center>Mesmerizing sail through the Yasawa islands in Fiji - 2016</center>
            </p>

            <p>
                <Image src="/images/about/IMAG0102.jpg" width="800" height="452"></Image>
                <center>I'll park my Miata in spots no one else would - 2016</center>
            </p>

            <p>
                <Image src="/images/about/IMG_1339.jpg" width="800" height="533"></Image>
                <center>Thrilling ambush by mountain goats at Lake Ingalls - 2015</center>
            </p>

            <p>
                <Image src="/images/about/DSC01478.jpg" width="800" height="533"></Image>
                <center>Hanging out with locals in Oman - 2015</center>
            </p>

            <p>
                <Image src="/images/about/IMAG1637.jpg" width="800" height="452"></Image>
                <center>Overnight at Tolmie Peak lookout - 2014</center>
            </p>

            <p>
                <Image src="/images/about/P1110137.jpg" width="800" height="533"></Image>
                <center>McGill Graduation - 2013</center>
            </p>

            <p>
                <Image src="/images/about/IMG_1963.JPG" width="800" height="600"></Image>
                <center>My mom documented my competitive nature - 1996</center>
            </p>

        </Layout>
    );
}
