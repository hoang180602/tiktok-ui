import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/68deab055418a64fd00ab0d00d76b84b.jpeg?x-expires=1701086400&x-signature=x0E1KApN1XTJoU8jojffNEh0nDE%3D"
                alt="Hoang"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Huu Hoang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>hoang180602</span>
            </div>
        </div>
    );
}

export default AccountItem;
