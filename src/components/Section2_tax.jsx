"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import React, { useState, useEffect } from "react";

const Section2_tax = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Tax calculator logic

  const [purchasePrice, setPurchasePrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [expenses, setExpenses] = useState("");
  const [investmentType, setInvestmentType] = useState("long");
  const [annualIncome, setAnnualIncome] = useState("group1");
  const [result, setResult] = useState("");

  // Results variables
  const [taxRateResult, setTaxRateResult] = useState("");
  const [capitalGainsResult, setCapitalGainsResult] = useState("");
  const [discountForLongTermGainsResult, setDiscountForLongTermGainsResult] =
    useState("");
  const [netCapitalGainsResult, setNetCapitalGainsResult] = useState("");
  const [taxToBePaidResult, setTaxToBePaidResult] = useState("");

  const calculate = () => {
    // Convert values to numbers
    const purchasePriceNum = +purchasePrice;
    const salePriceNum = +salePrice;
    const expensesNum = +expenses;

    // Compute capital gains
    const capitalGains = salePriceNum - purchasePriceNum - expensesNum;
    let discountForLongTermGains = 0;
    if (investmentType === "long" && capitalGains > 0) {
      discountForLongTermGains = capitalGains * 0.5;
    }

    // Compute net capital gains
    const netCapitalGains = capitalGains - discountForLongTermGains;

    // Compute tax rate and tax to be paid
    const taxRate = annualIncome === "group2" ? 0.325 : 0; // Adjust tax rate as necessary
    const taxToBePaid = netCapitalGains * taxRate;

    // Our results
    setTaxRateResult(
      `Tax Rate: $5092 + ${taxRate * 100}% of excess over $45000`
    );
    setCapitalGainsResult(`${capitalGains}`);
    setDiscountForLongTermGainsResult(`${discountForLongTermGains}`);
    setNetCapitalGainsResult(`${netCapitalGains}`);
    setTaxToBePaidResult(`${taxToBePaid.toFixed(2)}`);
  };

  return (
    <Container className=" mt-4">
      <Row>
        <Col sm={8}>
          {/*//////////////////////// Tax-calculator /////////////////////////////////////////*/}
          <Row className="bg-white shadow-1-strong text-dark radius">
            <h2 className="text-center my-3">
              Free Crypto Tax Calculator for Australia
            </h2>

            <Container>
              <Form>
                <Row>
                  <Col>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Financial Year
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          style={{ backgroundColor: "#EFF2F5" }}
                          aria-label="Select investment type"
                          name="investmentType"
                          id="investmentType"
                          value={investmentType}
                          onChange={(e) => setInvestmentType(e.target.value)}
                        >
                          <option value="long">FY 2023-24</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Country
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          style={{ backgroundColor: "#EFF2F5" }}
                          aria-label="Select investment type"
                          name="investmentType"
                          id="investmentType"
                          value={investmentType}
                          onChange={(e) => setInvestmentType(e.target.value)}
                        >
                          <option value="long">Australia</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </Col>

                  <hr />
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="6">
                    <Form.Label
                      htmlFor="purchasePrice"
                      style={{ fontSize: "13px" }}
                    >
                      Enter purchase price of crypto
                    </Form.Label>
                    <Form.Control
                      style={{ backgroundColor: "#EFF2F5" }}
                      type="number"
                      id="purchasePrice"
                      name="purchasePrice"
                      placeholder="$"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="6">
                    <Form.Label
                      htmlFor="salePrice"
                      style={{ fontSize: "13px" }}
                    >
                      Enter sale price of crypto
                    </Form.Label>
                    <Form.Control
                      style={{ backgroundColor: "#EFF2F5" }}
                      type="number"
                      id="salePrice"
                      name="salePrice"
                      placeholder="$"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label htmlFor="expenses">
                        Enter your expenses
                      </Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          style={{ backgroundColor: "#EFF2F5" }}
                          type="number"
                          id="expenses"
                          name="expenses"
                          placeholder="$"
                          value={expenses}
                          onChange={(e) => setExpenses(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>

                  <Col>
                    <label htmlFor="investmentType">Investment Type:</label>
                    <br />
                    <Form.Select
                      style={{ backgroundColor: "#EFF2F5" }}
                      aria-label="Select investment type"
                      name="investmentType"
                      id="investmentType"
                      value={investmentType}
                      onChange={(e) => setInvestmentType(e.target.value)}
                    >
                      <option value="long">Long Term ({`>`}12months)</option>
                      <option value="short">Short Term ({`<`}12months)</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="6">
                    <label htmlFor="annualIncome">Annual Income:</label>
                    <br />
                    <Form.Select
                      style={{ backgroundColor: "#EFF2F5" }}
                      name="annualIncome"
                      id="annualIncome"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(e.target.value)}
                    >
                      <option active value="group1">
                        Select income range
                      </option>
                      <option value="group2">$45,001 - $120,000</option>
                      {/* other groups can be added here */}
                    </Form.Select>
                  </Form.Group>

                  <Col>
                    <p className="mt-4">
                      Tax Rate
                      <br />
                      $5,902 + 32.5% of excess over $45001
                    </p>
                  </Col>
                </Row>

                <button
                  type="button"
                  onClick={calculate}
                  class="btn btn-outline-success bt"
                >
                  Calculate Tax
                </button>
              </Form>

              {/* Results  */}

              <div>
                <Row className="mb-3">
                  <div className="col-sm-6 ">
                    <Form.Group>
                      {investmentType === "long" && (
                        <>
                          <label>Capital gains amount</label>
                          <div
                            style={{ fontSize: "18px" }}
                            className="resultContainer form-control"
                          >
                            <b>${capitalGainsResult}</b>
                          </div>
                        </>
                      )}
                    </Form.Group>
                  </div>
                  <div className="col-sm-6">
                    <Form.Group>
                      {investmentType === "long" && (
                        <>
                          <label style={{ fontSize: "14.5px" }}>
                            Discount for long term gains
                          </label>

                          <div
                            style={{ fontSize: "18px" }}
                            className="resultContainer form-control"
                          >
                            <b>${discountForLongTermGainsResult}</b>
                          </div>
                        </>
                      )}
                    </Form.Group>
                  </div>
                </Row>

                <div className="row my-2">
                  <div className="col-sm-6">
                    <div
                      style={{
                        backgroundColor: "#EBF9F4",
                        border: "1px #EBF9F4",
                      }}
                      className="resultContainer form-control text-center"
                    >
                      <b>
                        Net Capital Gain
                        <br />
                        <b style={{ color: "#0FBA83", fontSize: "24px" }}>
                          ${netCapitalGainsResult}
                        </b>
                      </b>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      style={{
                        backgroundColor: "#EBF2FF",
                        border: "1px #EBF2FF",
                      }}
                      className="resultContainer form-control text-center"
                    >
                      <b>
                        The tax you need to pay*
                        <br />
                        <b style={{ color: "#0141CF", fontSize: "24px" }}>
                          ${taxToBePaidResult}
                        </b>{" "}
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Row>

          {/*//////////////////////// Tax-calculator-END /////////////////////////////////////////*/}

          {/*//////////////////////// FAQs /////////////////////////////////////////*/}
          <Row className=" bg-white shadow-1-strong text-dark radius">
            <Container>
              <h3 className="my-3">Frequently Asked Questions</h3>
              <ol>
                {/* 1 */}
                <li>
                  <h5>How The are cryptocurrencies taxed in Australia?</h5>
                  <p>
                    Australian Taxation Office (ATO) regards cryptocurrency as
                    both property, which is subject to Capital Gains Tax (CGT),
                    and income, which is subject to Income Tax. CGT applies when
                    you sell, trade, gift, or make purchases using
                    cryptocurrency. On the other hand, Income Tax applies when
                    you receive cryptocurrency as payment for services, work,
                    mining, staking, or other activities. To simplify tax
                    calculations, consider using a free crypto tax calculator
                    for Australia.
                  </p>
                </li>

                {/* 2 */}
                <li>
                  <h5>
                    What's the difference between long-term and short-term
                    capital gains?
                  </h5>
                  <p>
                    The distinction between long-term and short-term capital
                    gains lies in the duration of ownership. When you own an
                    asset, such as cryptocurrency, for more than 12 months, any
                    gains from its sale are categorised as long-term. These
                    long-term gains often receive a 50% discount on the capital
                    gains tax (CGT). In contrast, if you hold the asset for 12
                    months or less, the gains are considered short-term, and
                    they are taxed at your regular income tax rate.
                  </p>
                </li>

                {/* 3 */}
                {!isMobile && (
                  <>
                    <li>
                      <h5>
                        Do I have to pay tax on crypto-to-crypto transactions?
                      </h5>
                      <p>
                        Yes, according to the ATO, when you trade one
                        cryptocurrency for another, like NFTs, stablecoins, or
                        tokens, it's seen as selling one asset to buy another,
                        and any profit you make from this exchange is subject to
                        Capital Gains Tax. To compute taxes for crypto-to-crypto
                        transactions, you must determine the fair market value
                        of your coins in AUD at both the acquisition and
                        disposal times. However, this can be challenging because
                        many exchanges use cryptocurrency as the standard for
                        valuation. Explore KoinX for a streamlined experience in
                        calculating your cryptocurrency taxes. Our historical
                        price engine swiftly delivers the fair market value of
                        your crypto holdings at the time of each transaction,
                        making tax assessment hassle-free.
                      </p>
                    </li>

                    <li>
                      <h5>How do I lower my cryptocurrency taxes?</h5>
                      <p>
                        Here are the top 6 strategies for lowering your
                        cryptocurrency taxes in Australia:
                      </p>
                      <ul>
                        <li>
                          Hold for over 12 months- Hold your crypto for more
                          than 12 months to qualify for a 50% long-term CGT
                          discount to reduce your tax liability.
                        </li>
                        <li>
                          Offset gains with losses- Offset capital gains with
                          capital losses from cryptocurrency, reducing your
                          overall tax burden.
                        </li>
                        <li>
                          {" "}
                          Claim tax deductions- Explore opportunities to claim
                          significant deductions on your regular income if
                          you're a trader or running a crypto business.
                        </li>
                        <li>
                          Use crypto tax tools- Employ crypto tax software like
                          KoinX or seek help from a crypto tax specialist to
                          streamline calculations and ensure compliance.
                        </li>
                        <li>
                          Donate to charities- Donate cryptocurrency to
                          registered charities since it's not a taxable event,
                          and claim deductions on the donated amount.
                        </li>
                        <li>
                          Full disclosure- Be transparent and disclose all your
                          crypto transactions to the ATO to avoid penalties for
                          hiding trading activities.
                        </li>
                      </ul>
                    </li>

                    {/* 5 */}
                    <li>
                      <h5>Can the ATO track crypto?</h5>
                      <p>
                        The Australian Taxation Office (ATO) possesses strong
                        tracking capabilities for cryptocurrency transactions.
                        Since 2014, they've been gathering data on crypto
                        activities, including KYC info from exchanges and
                        wallets. The ATO's data matching program, active since
                        2019, lets them access data from service providers like
                        Binance and CoinJar, covering personal details and
                        transaction specifics. Since 2020, the ATO has been
                        notifying Australian crypto investors to report holdings
                        to avoid penalties.
                      </p>
                    </li>

                    {/* 6 */}
                    <li>
                      <h5>
                        What is the best crypto tax calculator for Australia?
                      </h5>
                      <p>
                        KoinX is a crypto tax platform that makes it easy to
                        calculate tax on crypto transactions. It also provides
                        portfolio insights of all crypto exchange accounts
                        combined, making it a valuable tool for chartered
                        accountants and VDA Investors alike.
                      </p>
                    </li>

                    {/* 7 */}
                    <li>
                      <h5>
                        Do I have to pay tax if I lose money trading crypto?
                      </h5>
                      <p>
                        In Australia, when your cryptocurrency loses value, it's
                        classified as a capital loss. This means you won't have
                        to pay taxes on that loss. It's a way to offset any
                        gains you might have made in other investments for tax
                        purposes.
                      </p>
                    </li>

                    {/* 8 */}
                    <li>
                      <h5>Is using a crypto tax calculator safe?</h5>
                      <p>
                        KoinX provides a reliable crypto tax calculator that can
                        assist you in determining your tax obligations for
                        cryptocurrency transactions. This tool accurately tracks
                        your portfolio on your preferred exchange and computes
                        your gains or losses based on the crypto amounts and
                        prices involved.
                      </p>
                    </li>

                    {/* 9 */}
                    <li>
                      <h5>Which exchanges do you support?</h5>
                      <p>
                        KoinX seamlessly integrates with a wide array of
                        exchanges, including Binance, CoinSpot, MEXC, Bybit,
                        Coinbase, Kraken, and numerous others. It effortlessly
                        consolidates cryptocurrency transactions from over 180+
                        chains, exchanges, and wallets, presenting them in a
                        user-friendly unified dashboard.
                      </p>
                    </li>

                    {/* 10 */}

                    <li>
                      <h5>
                        Do I have to pay tax if I transfer crypto from one
                        wallet to another?
                      </h5>
                      <p>
                        Transferring cryptocurrency from one wallet to another
                        that you own in Australia is not subject to tax, as it
                        is not recognised as a taxable event, and capital gains
                        tax is not triggered. Nevertheless, it's essential to
                        keep detailed records of these transfers, particularly
                        if you are utilising automated crypto tax software like
                        KoinX. KoinX, as a reliable crypto tax software, can
                        streamline the process, making it easier to maintain
                        accurate and efficient tax records and reporting while
                        ensuring compliance with Australian tax regulations.
                      </p>
                    </li>

                    {/* 11 */}

                    <li>
                      <h5>How do I use a cryptocurrency tax calculator?</h5>
                      <p>
                        In order to use a cryptocurrency tax calculator, you
                        need to input information about your cryptocurrency
                        transactions.
                      </p>
                      <p>
                        After you enter your information, the cryptocurrency tax
                        calculator will calculate the gain or loss on every
                        transaction.
                      </p>

                      <ol>
                        This includes:
                        <li>
                          The financial year you want to calculate your taxes
                          for.
                        </li>
                        <li>
                          The country you want to calculate your taxes for.
                        </li>
                        <li>The purchase price of the coin.</li>
                        <li>The sale price of the coin.</li>
                      </ol>

                      <p>You will get results that mention the following:</p>
                      <ol>
                        <li>The total profit/loss you made</li>
                        <li>The tax you're liable to pay</li>
                      </ol>

                      <p>
                        Still have doubts?
                        <a href="#">Consult with a crypto taxation expert</a>
                      </p>
                    </li>

                    {/* 12 */}

                    <li>
                      <h5>How do I calculate my crypto tax in Australia?</h5>
                      <p>
                        To calculate your crypto tax in Australia accurately,
                        you need to consider both income tax and capital gains
                        tax.
                      </p>
                      <p>
                        Income Tax
                        <br />
                        In Australia, when an individual (investor) sells,
                        trades, spends, earns (salary, mining, interest) or
                        gifts cryptocurrency, the net capital gain is taxed at
                        the same rate as their Income Tax. This tax rate is
                        determined based on their total income for the tax year.
                      </p>

                      <b>ATO Individual Income Tax Rates 2022-2023</b>
                      {/* table */}

                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Income</th>
                            <th>Tax Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>$0 - $18,200</td>
                            <td>0%</td>
                          </tr>
                          <tr>
                            <td>$18,201 $45,000</td>
                            <td>Nil + 19% of the excess over $18,200</td>
                          </tr>
                          <tr>
                            <td>$45,001 - $120,000</td>
                            <td>$5,092 + 32.5% of the excess over $45,000</td>
                          </tr>

                          <tr>
                            <td>$120,001 - $180,000</td>
                            <td>$29,467 + 37% of the excess over $120,000</td>
                          </tr>

                          <tr>
                            <td>$180,001+</td>
                            <td>$51,667+ 45% of the excess over $180,000</td>
                          </tr>
                        </tbody>
                      </Table>
                    </li>

                    <h5>Capital Gains Tax (CGT)</h5>
                    <p>
                      Calculate your capital gains or losses on cryptocurrency
                      transactions using this formula:
                    </p>
                    <p>Capital Gain/Loss = Capital Proceeds - Cost Basis</p>
                    <b>
                      Note:
                      <br />
                      Capital Proceeds (sale value or any form of receipt)
                      <br /> Cost Basis (costs incurred to acquire, hold, and
                      dispose of the asset)
                    </b>
                    <p>
                      Your tax rate depends on whether you held the
                      cryptocurrency for more than 12 months (long-term) or less
                      (short-term). Long-term gains receive a 50% discount.
                    </p>

                    <p>
                      Calculate your Australian crypto taxes accurately and
                      effortlessly with KoinX's free crypto tax calculator for
                      Australia. It simplifies the process, ensuring compliance
                      with the latest tax rates and regulations making crypto
                      tax calculations easy and precise.
                    </p>
                  </>
                )}
              </ol>
            </Container>
          </Row>
          {/*//////////////////////// FAQs-END /////////////////////////////////////////*/}
        </Col>

        {/* get-started with KoinX */}
        <Col sm={4}>
          <Card className="bg-primary shadow-1-strong text-light text-center cardd">
            {!isMobile && (
              <Card.Body className="my-0">
                <Card.Title>Get Started with KoinX </Card.Title>
                <Card.Title className="my-2">for FREE</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                  With our ranges of features that you can equip for free, KoinX
                  allow you to be more educated and aware of your tax reports.
                </Card.Text>
                <img
                  src="../images/promotion.png"
                  alt="Promotion"
                  width="178.66px"
                  height="166.22px"
                />
                <br />
                <Button variant="light">Get Started for FREE</Button>{" "}
              </Card.Body>
            )}

            {isMobile && (
              <Card.Body className="my-0">
                <Card.Title>
                  {" "}
                  <img
                    src="../images/promotion.png"
                    width="178.66px"
                    height="166.22px"
                    alt="Promotion"
                  />
                </Card.Title>
                <Card.Title className="my-2">
                  Track your portfolio & taxes
                </Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                  With our ranges of features that you can equip for free, KoinX
                  allow you to be more educated and aware of your tax reports.
                </Card.Text>
                <Button variant="light">Signup at KoinX for free</Button>{" "}
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Section2_tax;
