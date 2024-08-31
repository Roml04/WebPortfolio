<!-- The PHP version of index.html. With data and PHP functions -->

<?php 

    $firstName = "Rommel";
    $lastName = "Garais";

    $twitterUserName = "_romll";
    $githubUserName = "Roml04";

    $aboutMe_ProfileDescription = "I am a third-year Computer Science student at STI College Calamba with a strong interest in web development, particularly in the core processes involved in building websites.";
    
    $aboutMe_VisionTitle = "Web Design and Development are my passion."; 
    $aboutMe_Vision = "When it comes to web design and development, I am committed to creating websites that adhere to HCI standards. I specialize in combining functionality with aesthetics to deliver engaging and accessible experiences that meet the needs of all users. My goal is to buil d intuitive, responsive, and visually appealing websites that stand out for their usability and effectiveness."; 

    $itoriProjectTitle = "Itori";
    $kumoWriteProjectTitle = "KumoWrite";
    $stiProjectTitle = "STI";

    $itori_ProjectLink = "https://www.figma.com/design/Sip3Zv93lDh2m02T8DkZFr/Itori---Coffee-Shop?node-id=0-1&t=9iVk0vMv3Pf8YW5u-1";
    $kumoWrite_ProjectLink = "https://www.figma.com/design/6KkdTytUOkV54NlD5lmeDb/KumoWrite-Project?node-id=0-1&t=co0ZFjmIidh3MAwD-1";
    $sti_ProjectLink = "https://www.figma.com/design/CQoIHKCYeXgpcXdxoekJLH/WEBPROG---Promotion-Page?node-id=0-1&t=FgSDYwoNZiHTQOnd-1";

    function printFullName ($firstName, $lastName) {
        echo $firstName . " " . $lastName;
    }

    function printUserNames ($userName) {
        echo "@" . $userName;
    }

    function printProfileDescription ($profileDescription) {
        echo $profileDescription;
    }

    function printAboutMeVisonTitle ($visionTitle) {
        echo $visionTitle;
    }

    function printAboutMeVision($vision) {
        echo $vision;
    }

    function printProjectTitle($projectTitle) {
        echo $projectTitle;
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rommel Garais | Web Portfolio</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./webportfolio.css">
</head>
<body class="container-v">

    <!-- HEADER -->
    <header class="container-h portfolio-header gap2rem">
        <div class="container-h contacts-container">
            
            <a class="container-h gap0-5rem" href="https://x.com/_romll" target="_blank">
                <img class="icon" src="./assets/icons/twitter-icon.svg" alt="Twitter Icon">
                <p class="contact-usernames"> <?php printUserNames($twitterUserName); ?> </p>
            </a>
            
        </div>
        <div class="container-h contacts-container">
            
            <a class="container-h gap0-5rem" href="https://github.com/Roml04" target="_blank">
                <img class="icon" src="./assets/icons/github-icon.svg" alt="GitHub Icon">
                <p class="contact-usernames"> <?php printUserNames($githubUserName); ?> </p>
            </a>
            
        </div>
    </header>

    <!-- INTRO SECTION -->
    <section class="container-h intro-section">
        <div class="container-v slogan-container gap3rem">
            <img class="profile-pic" src="./assets/images/profile-pic.webp" alt="">
            <div class="container-v gap0-5rem">
                <div class="container-h gap0-5rem line-container">
                    <h1><span class="paragraph-emb">01 </span>Hello!</h1>
                </div>
                <p> <?php printFullName($firstName, $lastName); ?> here</p>
                <p>I design and develop websites.</p>
            </div>
            <button id="scrollToSection-btn" class="container-h calltoaction-btn gap0-5rem">I want to know more <img class="icon-small" src="./assets/icons/right-arrow-icon.svg" alt=""></button>
        </div>
        <div class="container-v img-container">
            <div class="img-pos-container">
                <img class="img3" src="./assets/images/Itori-AboutUsx.webp" alt="">
                <img class="img2" src="./assets/images/Itori-ProductsPage.webp" alt="">
                <img class="img1" src="./assets/images/Itori-HomePage.webp" alt="">
            </div>
        </div>
    </section>
    
    <!-- PROJECTS SECTION -->
    <section id="target-section" class="container-v projects-section gap4rem">

        <h2 class="projects-section-title"><span class="paragraph-emb">02 </span>Projects</h2>
        
            <div class="container-h project-carousell">

                <div class="container-h carousell-pos-container gap1-5rem">

                    <div class="container-h project-card kumowrite-card">
                        
                        <h3 class="title card-elements"> .<?php printProjectTitle($kumoWriteProjectTitle); ?> </h3>
                        <div class="link-container container-h gap0-5rem">
                            <?php echo "<a class=\"project-link card-elements\" target=\"_blank\" href=\"$kumoWrite_ProjectLink\" class=\"link\">" ?>
                                Visit <?php printProjectTitle($kumoWriteProjectTitle); ?>
                                <img class="icon-small link-icon" src="./assets/icons/redirect-icon.svg" alt="">
                            </a>
                        </div>
                        
                    </div>
                    
                    <div class="container-h project-card centered itori-card">
                        
                        <h3 class="title card-elements"> .<?php printProjectTitle($itoriProjectTitle); ?> </h3>
                        <div class="link-container container-h gap0-5rem">
                            <?php echo "<a class=\"project-link card-elements\" target=\"_blank\" href=\"$itori_ProjectLink\" class=\"link\">" ?>
                                Visit <?php printProjectTitle($itoriProjectTitle); ?>
                                <img class="icon-small link-icon card-elements" src="./assets/icons/redirect-icon.svg" alt="">
                            </a>
                        </div>

                    </div>
                    
                    <div class="container-h project-card sti-card">
                        
                        <h3 class="title card-elements"> .<?php printProjectTitle($stiProjectTitle); ?> </h3>
                        <div class="link-container container-h gap0-5rem">
                            <?php echo "<a class=\"project-link card-elements\" target=\"_blank\" href=\"$sti_ProjectLink\" class=\"link\">" ?>
                                Visit <?php printProjectTitle($stiProjectTitle); ?>
                                <img class="icon-small link-icon" src="./assets/icons/redirect-icon.svg" alt="">
                            </a>
                            
                        </div>
        
                    </div>
                    
                </div>
    
            </div>        
        
    </section>
    
    <section class="container-v aboutme-section gap3rem">
        <h2 class="aboutme-title"><span class="paragraph-emb">02 </span>About Me</h2>
        <div class="container-h profilepic-name-container gap2rem">
            <div class="container-v gap2rem">
                <h2>
                    <?php printFullName($firstName, $lastName); ?>
                </h2>
                <p> <?php printProfileDescription($aboutMe_ProfileDescription); ?> </p>
            </div>
            <img class="profile-pic aboutme-profilepic" src="./assets/images/profile-pic.webp" alt="">
        </div>

        <div class="container-v gap2rem">
            <h3> <?php printAboutMeVisonTitle($aboutMe_VisionTitle); ?> </h3>
            <p> <?php printAboutMeVision($aboutMe_Vision); ?> </p>
        </div>

        <div class="container-h gap6rem">
            <div class="container-v gap2rem">
                <h3>.Graphics and UX/UI Design</h3>
                <div class="container-h gap2rem">
                    <img class="icon aboutme-icon" src="./assets/icons/figma-icon.svg" alt="">
                    <img class="icon aboutme-icon" src="./assets/icons/photoshop-icon.svg" alt="">
                    <img class="icon aboutme-icon" src="./assets/icons/illustrator-icon.svg" alt="">
                </div>
            </div>

            <div class="container-v gap2rem">
                <h3>.Web Development</h3>
                <div class="container-h gap2rem">
                    <img class="icon aboutme-icon" src="./assets/icons/vscode-icon.svg" alt="">
                    <img class="icon aboutme-icon" src="./assets/icons/html-icon.svg" alt="">
                    <img class="icon aboutme-icon" src="./assets/icons/css-icon.svg" alt="">
                    <img class="icon aboutme-icon" src="./assets/icons/javasript-icon.svg" alt="">
                    <img class="icon aboutme-icon" src="./assets/icons/php-icon.svg" alt="">
                </div>
            </div>
        </div>
    </section>

    <script src="./script.js"></script>
</body>
</html>