
import './styles.css';
import makeParagraph from './paragraph';

const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos quaerat autem molestias facilis necessitatibus sequi inventore laudantium ullam, sit earum est maiores harum, quisquam quas! Nihil assumenda saepe pariatur quo veritatis, ullam ad sapiente quas maiores explicabo nisi corrupti nam molestias modi animi fuga, a totam perferendis tempora expedita.';
const p = makeParagraph(text);
document.body.appendChild(p);
