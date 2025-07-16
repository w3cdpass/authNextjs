import PropTypes from 'prop-types';
import { gloabalTheme } from "../Theme/Theme";
import Image from 'next/image';

const GlobalCategories = ({ categories }) => {
    return (
        <div className="hidden lg:block">
            <h2
                className="text-center text-[28px] sm:text-[40px] font-semibold  py-10"
                style={{
                    // fontFamily: 'Marcelluse',
                    // textShadow: '0 3px 4px #333',
                }}
                data-aos="fade-up"
            >
                Explore By More Specific{' '}
                <span style={{ color: gloabalTheme.colors.primary }}>Categories</span>
            </h2>

            <div className="w-full flex justify-center globalCateImge p-12">
                <div className="w-[90%]">
                    <div className="flex justify-between flex-wrap gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center relative w-[120px] h-[120px] md:w-[225px] md:h-[225px]"
                            >
                                {/* Rotating background circle */}
                                <div className="relative rounded-full w-full h-full p-2">
                                    <div className="absolute inset-0 rounded-full border-dashed border-2 border-white spinny"></div>

                                    <Image
                                        className="rounded-full  object-cover revertbw"
                                        src='/images/circle.svg'
                                        alt="static background"
                                        width={800}
                                        height={800}
                                    />
                                </div>

                                {/* Foreground icon + text */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <Image
                                            className="globaliconColor w-8 h-8"
                                            src={category.img}
                                            alt="category icon"
                                            width={30}
                                            height={30}
                                        />
                                        <p className="font-semibold text-white text-sm leading-tight">
                                            {category.para}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

GlobalCategories.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.oneOfType([
                PropTypes.string,     // If you're using regular URLs
                PropTypes.object,     // If you're using `import img from` with next/image
            ]).isRequired,
            para: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default GlobalCategories;
