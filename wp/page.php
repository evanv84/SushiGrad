<?php

get_header(); ?>

<header id="top" class="shop-header">
    		<div class="bcg">
    			<div></div>
    		</div>
    		<div class="bcg-dark"></div>
    		<nav class="top-nav">
    			<div class="nav-wrapper">
    				<div class="brand">
    					<img src="<?php echo get_stylesheet_directory_uri() ?>/img/logo-top.png" alt="Доставка суши и роллов в Ижевске">
    				</div>
    				<div class="menu">
	                    <ul class="nav-toggle">
	                        <li><a href="#">Меню</a></li>
	                        <li><a href="#">Доставка</a></li>
	                        <li><a href="#fastorder">Быстрый заказ</a></li>
	                    </ul>
	                    <div class="nav-collapse">
	                        <div id="nav-icon">
	                          <span></span>
	                          <span></span>
	                          <span></span>
	                          <span></span>
	                          <span></span>
	                          <span></span>
	                        </div>
	                    </div>
	                </div>
	                <div class="contacts">
	                	<a href="tel:+73412913033"><span>+7 (3412)</span> 913-033</a>
	                </div>
    			</div>
    		</nav>
    		<div class="container">
    			<div class="main-content">
    				<!-- <img src="img/logo-top-big.png" alt=""> -->
    				<h1>Меню</h1>
    			</div>
    		</div>
    	</header>

    	<section id="shop-content">
            <div class="container">
                <div class="filters">
                    <p>Some content</p>
                </div>
                <div class="shop-inner">
					<?php
						// Start the Loop.
						while ( have_posts() ) : the_post();

							// Include the page content template.
							get_template_part( 'content', 'page' );

							// If comments are open or we have at least one comment, load up the comment template.
							if ( comments_open() || get_comments_number() ) {
								comments_template();
							}
						endwhile;
					?>
                </div>
            </div>
        </section>


<?php
get_footer();
